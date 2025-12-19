import { teams } from './teams';
// Helper to find team by seed
export interface Matchup {
    id: string;
    round: 'Round of 32' | 'Sweet 16' | 'Elite 8' | 'Final 4' | 'Natty';
    homeTeamId: string;
    awayTeamId: string;
    bowlId: string;
    nextMatchupId?: string; // ID of the match the winner goes to
}

// Helper to find team by seed
const t = (seed: number) => teams.find(t => t.seed === seed)?.id || 'unknown';
// Helper to find bowl by ID (just for validation/reference if needed, but we store ID)

export const roundOf32: Matchup[] = [
    // MIDWEST / BIG TEN
    { id: 'r32_1', round: 'Round of 32', homeTeamId: t(1), awayTeamId: t(32), bowlId: 'quicklane' },
    { id: 'r32_2', round: 'Round of 32', homeTeamId: t(16), awayTeamId: t(17), bowlId: 'musiccity' },

    // FLORIDA
    { id: 'r32_3', round: 'Round of 32', homeTeamId: t(8), awayTeamId: t(25), bowlId: 'gator' },
    { id: 'r32_4', round: 'Round of 32', homeTeamId: t(9), awayTeamId: t(24), bowlId: 'reliaquest' },

    // SOUTHWEST
    { id: 'r32_5', round: 'Round of 32', homeTeamId: t(5), awayTeamId: t(28), bowlId: 'alamo' },
    { id: 'r32_6', round: 'Round of 32', homeTeamId: t(12), awayTeamId: t(21), bowlId: 'sun' },

    // TEXAS
    { id: 'r32_7', round: 'Round of 32', homeTeamId: t(4), awayTeamId: t(29), bowlId: 'texas' },
    { id: 'r32_8', round: 'Round of 32', homeTeamId: t(13), awayTeamId: t(20), bowlId: 'citrus' },

    // CALIFORNIA
    { id: 'r32_9', round: 'Round of 32', homeTeamId: t(2), awayTeamId: t(31), bowlId: 'holiday' },
    { id: 'r32_10', round: 'Round of 32', homeTeamId: t(15), awayTeamId: t(18), bowlId: 'la' },

    // SOUTHEAST
    { id: 'r32_11', round: 'Round of 32', homeTeamId: t(7), awayTeamId: t(26), bowlId: 'dukes' },
    { id: 'r32_12', round: 'Round of 32', homeTeamId: t(10), awayTeamId: t(23), bowlId: 'pinstripe' },

    // GULF
    { id: 'r32_13', round: 'Round of 32', homeTeamId: t(3), awayTeamId: t(30), bowlId: 'peach' },
    { id: 'r32_14', round: 'Round of 32', homeTeamId: t(14), awayTeamId: t(19), bowlId: 'guaranteedrate' }, // Prompt said Gulf->Peach/Guaranteed Rate??

    // MIDWEST (Lower bracket part)
    { id: 'r32_15', round: 'Round of 32', homeTeamId: t(6), awayTeamId: t(27), bowlId: 'liberty' },
    { id: 'r32_16', round: 'Round of 32', homeTeamId: t(11), awayTeamId: t(22), bowlId: 'military' },
];
