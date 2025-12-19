import { clsx } from 'clsx';
import type { Team } from '../../data/teams';
import { teams } from '../../data/teams';
import { bowls } from '../../data/bowls';

interface GameCardProps {
    matchupId: string;
    round: string;
    homeTeamId?: string;
    awayTeamId?: string;
    bowlId?: string;
    winnerId?: string; // ID of the team that advanced
    onClick?: () => void;
    highlighted?: boolean;
}

export const GameCard: React.FC<GameCardProps> = ({
    matchupId: _matchupId,
    round,
    homeTeamId,
    awayTeamId,
    bowlId,
    winnerId,
    onClick,
    highlighted
}) => {
    const home = teams.find(t => t.id === homeTeamId);
    const away = teams.find(t => t.id === awayTeamId);
    const bowl = bowls.find(b => b.id === bowlId);

    // Helper to render a team row
    const TeamRow = ({ team }: { team?: Team }) => {
        if (!team) return (
            <div className="h-8 flex items-center px-3 text-slate-500 text-xs font-mono uppercase">
                TBD
            </div>
        );

        const isWinner = winnerId === team.id;
        const isLoser = winnerId && winnerId !== team.id;

        return (
            <div className={clsx(
                "h-9 flex items-center justify-between px-3 transition-colors",
                isWinner && "bg-premium-gold/10",
                isLoser && "opacity-50"
            )}>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 w-4">{team.seed}</span>
                    {/* Logo Placeholder */}
                    <div
                        className="w-4 h-4 rounded-full shadow-sm"
                        style={{ backgroundColor: team.color }}
                    />
                    <span className={clsx(
                        "text-xs font-semibold truncate max-w-[100px]",
                        isWinner ? "text-premium-gold" : "text-slate-200"
                    )}>
                        {team.name}
                    </span>
                </div>

                {/* Record (only show for home/away on larger cards usually, but space is tight) */}
                {/* <span className="text-[10px] text-slate-500">{team.record}</span> */}
            </div>
        );
    };

    return (
        <div
            onClick={onClick}
            className={clsx(
                "w-48 bg-slate-900/80 border rounded-lg backdrop-blur-sm shadow-lg overflow-hidden cursor-pointer transition-all duration-300 relative group",
                highlighted
                    ? "border-premium-blue shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-[1.02] z-10"
                    : "border-slate-800 hover:border-slate-600 hover:shadow-xl"
            )}
        >
            {/* Bowl Header */}
            <div className="h-6 bg-slate-950 flex items-center justify-between px-3 border-b border-slate-800">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                    {bowl?.name || round}
                </span>
                {bowl?.city && (
                    <span className="text-[8px] text-slate-600">{bowl.city}</span>
                )}
            </div>

            {/* Teams */}
            <div className="flex flex-col">
                <TeamRow team={home} />
                <div className="h-[1px] bg-slate-800 w-full" />
                <TeamRow team={away} />
            </div>

            {/* Region Indicator (Optional side accent) */}
            <div className={clsx(
                "absolute top-0 bottom-0 left-0 w-[2px]",
                highlighted ? "bg-premium-blue" : "bg-transparent group-hover:bg-slate-700"
            )} />
        </div>
    );
};
