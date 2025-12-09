import { useState, useMemo } from 'react';
import { GameCard } from '../components/bracket/GameCard';
import type { Matchup } from '../data/bracket';
import { roundOf32 as initialMatchups } from '../data/bracket';
import { bowls } from '../data/bowls';

// Define the structure for all rounds
type RoundKey = 'Round of 32' | 'Sweet 16' | 'Elite 8' | 'Final 4' | 'Natty';

const ROUNDS: RoundKey[] = ['Round of 32', 'Sweet 16', 'Elite 8', 'Final 4', 'Natty'];

export const BracketView = () => {
    // State to track winners. Map of MatchupID -> WinnerTeamID
    const [winners, setWinners] = useState<Record<string, string>>({});

    // Helper to get the winner of a specific matchup ID
    const getWinner = (matchupId: string) => winners[matchupId];

    // Logic to build the full bracket tree dynamically based on R32
    // We need to pair adjacent games in R32 to feed into R16, etc.
    // The 'roundOf32' array in data is already ordered by quadrant roughly? 
    // We need to ensure the order corresponds to the bracket flow:
    // Match 1 (1v32) vs Match 2 (16v17) -> Winner goes to R16 Game 1

    const bracketData = useMemo(() => {
        // 1. Organize R32. We assume the input array is ordered such that (i) and (i+1) play each other in next round.
        // The Prompt listed them in Quadrants. 
        // Top Left: 1v32, 16v17 -> Pair 1. 8v25, 9v24 -> Pair 2.
        // Let's assume the array in `bracket.ts` is ordered correctly as pairs.
        // I'll double check `bracket.ts` logic. It lists them in order.

        // We will build arrays for each round.
        const roundsMap: Record<RoundKey, Matchup[]> = {
            'Round of 32': [...initialMatchups],
            'Sweet 16': [],
            'Elite 8': [],
            'Final 4': [],
            'Natty': []
        };

        // Generate subsequent rounds
        let currentRoundMatchups = initialMatchups;
        let nextRoundKeyIndex = 1;

        while (nextRoundKeyIndex < ROUNDS.length) {
            const nextRoundKey = ROUNDS[nextRoundKeyIndex];
            const nextRoundMatchups: Matchup[] = [];

            for (let i = 0; i < currentRoundMatchups.length; i += 2) {
                // Create a new matchup for the winners of i and i+1
                const match1 = currentRoundMatchups[i];
                const match2 = currentRoundMatchups[i + 1];

                // Determine bowl for this next game.
                // We can pick from the `bowls` list or just placeholder.
                // For now, simple ID generation.
                const nextMatchId = `match_${nextRoundKeyIndex}_${i / 2}`;

                // Find if we have a specific bowl assigned in `bowls.ts` for this slot?
                // We defined bowls mapping to rounds but not specific tree slots yet.
                // I'll grab a bowl from the pool that matches the round.
                const roundBowls = bowls.filter(b => b.round === nextRoundKey);
                // Simple distinct assignment mod length
                const assignedBowl = roundBowls[(i / 2) % roundBowls.length];

                nextRoundMatchups.push({
                    id: nextMatchId,
                    round: nextRoundKey,
                    homeTeamId: getWinner(match1.id), // Logic: Winner of Match 1 is Home (Top)
                    awayTeamId: getWinner(match2?.id || 'bye'), // Winner of Match 2 is Away (Bottom)
                    bowlId: assignedBowl?.id
                });
            }

            roundsMap[nextRoundKey] = nextRoundMatchups;
            currentRoundMatchups = nextRoundMatchups;
            nextRoundKeyIndex++;
        }

        return roundsMap;
    }, [winners]);

    const handleMatchClick = (match: Matchup) => {
        // If we have both teams, allow picking a winner.
        if (!match.homeTeamId || !match.awayTeamId) return;

        // Simple toggle or cycle: Home -> Away -> None
        const currentWinner = winners[match.id];
        let nextWinner = '';

        if (currentWinner === match.homeTeamId) nextWinner = match.awayTeamId;
        else if (currentWinner === match.awayTeamId) nextWinner = ''; // Reset
        else nextWinner = match.homeTeamId;

        // Determine path updates?
        // If we change a winner, all future rounds depending on this match need to be reset or updated?
        // React state update will trigger re-calc of `bracketData` which propagates the new team IDs.
        // However, if a future match already had a winner selected, and that winner is NOT one of the new participants, we should probably clear it.
        // Implementation detail: For now, just set the winner. The propogation happens in render. 
        // A deeper "clean up" effect would be better for UX but let's start here.

        setWinners(prev => ({
            ...prev,
            [match.id]: nextWinner
        }));
    };

    return (
        <div className="w-full h-full overflow-x-auto overflow-y-auto bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
            <div className="min-w-max min-h-full p-8 flex justify-center items-center gap-12">

                {/* LEFT SIDE (East) */}
                <div className="flex gap-12">
                    {/* R32 -> S16 -> E8 -> F4 */}
                    {['Round of 32', 'Sweet 16', 'Elite 8', 'Final 4'].map((round) => {
                        const allMatches = bracketData[round as RoundKey];
                        const leftMatches = allMatches.slice(0, allMatches.length / 2);

                        return (
                            <div key={`left-${round}`} className="flex flex-col justify-around gap-4 relative">
                                <div className="absolute -top-10 left-0 right-0 text-center text-premium-gold/50 text-[10px] font-black uppercase tracking-[0.2em]">
                                    {round.replace('Round of ', 'R').replace('Sweet ', 'S').replace('Elite ', 'E').replace('Final ', 'F')}
                                </div>
                                {leftMatches.map((match) => (
                                    <div key={match.id} className="relative flex items-center">
                                        <GameCard
                                            matchupId={match.id}
                                            round={round}
                                            homeTeamId={match.homeTeamId}
                                            awayTeamId={match.awayTeamId}
                                            bowlId={match.bowlId}
                                            winnerId={winners[match.id]}
                                            onClick={() => handleMatchClick(match)}
                                            highlighted={false}
                                        />
                                        {/* Connector to Right */}
                                        <div className="absolute -right-6 w-6 h-[2px] bg-slate-800" />
                                        {/* Vertical connectors would be complex to draw with pure CSS without distinct row spans, 
                                            but horizontal is fine for now to show flow */}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>

                {/* CENTER (Natty) */}
                <div className="flex flex-col justify-center items-center relative z-10 px-8">
                    <div className="absolute -top-12 text-center">
                        <div className="text-2xl font-black text-premium-gold animate-pulse">NATTY</div>
                        <div className="text-[10px] text-slate-500 tracking-widest uppercase">National Championship</div>
                    </div>

                    <div className="relative scale-125">
                        {/* Incoming from Left F4 */}
                        <div className="absolute top-1/2 -left-12 w-12 h-[2px] bg-premium-gold" />
                        {/* Incoming from Right F4 */}
                        <div className="absolute top-1/2 -right-12 w-12 h-[2px] bg-premium-gold" />

                        {bracketData['Natty'].map(match => (
                            <GameCard
                                key={match.id}
                                matchupId={match.id}
                                round="Natty"
                                homeTeamId={match.homeTeamId}
                                awayTeamId={match.awayTeamId}
                                bowlId={match.bowlId}
                                winnerId={winners[match.id]}
                                onClick={() => handleMatchClick(match)}
                                highlighted={true}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE (West) */}
                <div className="flex gap-12 flex-row-reverse">
                    {/* R32 <- S16 <- E8 <- F4 */}
                    {['Round of 32', 'Sweet 16', 'Elite 8', 'Final 4'].map((round) => {
                        const allMatches = bracketData[round as RoundKey];
                        const rightMatches = allMatches.slice(allMatches.length / 2, allMatches.length);

                        return (
                            <div key={`right-${round}`} className="flex flex-col justify-around gap-4 relative">
                                <div className="absolute -top-10 left-0 right-0 text-center text-premium-gold/50 text-[10px] font-black uppercase tracking-[0.2em]">
                                    {round.replace('Round of ', 'R').replace('Sweet ', 'S').replace('Elite ', 'E').replace('Final ', 'F')}
                                </div>
                                {rightMatches.map((match) => (
                                    <div key={match.id} className="relative flex items-center justify-end">
                                        <GameCard
                                            matchupId={match.id}
                                            round={round}
                                            homeTeamId={match.homeTeamId}
                                            awayTeamId={match.awayTeamId}
                                            bowlId={match.bowlId}
                                            winnerId={winners[match.id]}
                                            onClick={() => handleMatchClick(match)}
                                            highlighted={false}
                                        />
                                        {/* Connector to Left */}
                                        <div className="absolute -left-6 w-6 h-[2px] bg-slate-800" />
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};
