export interface Team {
    id: string;
    seed: number;
    name: string;
    record: string;
    conference: string;
    rank: number;
    color?: string; // Hex code for primary color
}

export const teams: Team[] = [
    { id: 'indiana', seed: 1, name: 'Indiana', record: '12-0', conference: 'Big Ten', rank: 1, color: '#990000' },
    { id: 'ohiostate', seed: 2, name: 'Ohio State', record: '11-1', conference: 'Big Ten', rank: 2, color: '#BB0000' },
    { id: 'georgia', seed: 3, name: 'Georgia', record: '10-2', conference: 'SEC', rank: 3, color: '#BA0C2F' },
    { id: 'texastech', seed: 4, name: 'Texas Tech', record: '10-2', conference: 'Big 12', rank: 4, color: '#CC0000' },
    { id: 'oregon', seed: 5, name: 'Oregon', record: '11-1', conference: 'Big Ten', rank: 5, color: '#154733' },
    { id: 'olemiss', seed: 6, name: 'Ole Miss', record: '10-2', conference: 'SEC', rank: 6, color: '#CE1126' },
    { id: 'texasam', seed: 7, name: 'Texas A&M', record: '10-2', conference: 'SEC', rank: 7, color: '#500000' },
    { id: 'oklahoma', seed: 8, name: 'Oklahoma', record: '10-2', conference: 'SEC', rank: 8, color: '#841617' },
    { id: 'alabama', seed: 9, name: 'Alabama', record: '9-3', conference: 'SEC', rank: 9, color: '#9E1B32' },
    { id: 'miami', seed: 10, name: 'Miami', record: '10-2', conference: 'ACC', rank: 10, color: '#005030' },
    { id: 'tulane', seed: 11, name: 'Tulane', record: '10-2', conference: 'AAC', rank: 11, color: '#006747' },
    { id: 'jamesmadison', seed: 12, name: 'James Madison', record: '10-2', conference: 'Sun Belt', rank: 12, color: '#450084' },
    { id: 'notredame', seed: 13, name: 'Notre Dame', record: '10-2', conference: 'Indep', rank: 13, color: '#0C2340' },
    { id: 'byu', seed: 14, name: 'BYU', record: '10-2', conference: 'Big 12', rank: 14, color: '#002E62' },
    { id: 'texas', seed: 15, name: 'Texas', record: '9-3', conference: 'SEC', rank: 15, color: '#BF5700' },
    { id: 'vanderbilt', seed: 16, name: 'Vanderbilt', record: '9-3', conference: 'SEC', rank: 16, color: '#E03C31' }, // Gold/Black actually
    { id: 'utah', seed: 17, name: 'Utah', record: '9-3', conference: 'Big 12', rank: 17, color: '#CC0000' },
    { id: 'usc', seed: 18, name: 'USC', record: '8-4', conference: 'Big Ten', rank: 18, color: '#990000' },
    { id: 'arizona', seed: 19, name: 'Arizona', record: '8-4', conference: 'Big 12', rank: 19, color: '#CC0033' },
    { id: 'michigan', seed: 20, name: 'Michigan', record: '8-4', conference: 'Big Ten', rank: 20, color: '#00274C' },
    { id: 'virginia', seed: 21, name: 'Virginia', record: '8-4', conference: 'ACC', rank: 21, color: '#E57200' },
    { id: 'houston', seed: 22, name: 'Houston', record: '8-4', conference: 'Big 12', rank: 22, color: '#C8102E' },
    { id: 'georgiatech', seed: 23, name: 'Georgia Tech', record: '8-4', conference: 'ACC', rank: 23, color: '#B3A369' },
    { id: 'iowa', seed: 24, name: 'Iowa', record: '8-4', conference: 'Big Ten', rank: 24, color: '#FFCD00' },
    { id: 'unc', seed: 25, name: 'North Carolina', record: '8-4', conference: 'ACC', rank: 25, color: '#7BAFD4' },
    { id: 'ncstate', seed: 26, name: 'NC State', record: '8-4', conference: 'ACC', rank: 26, color: '#CC0000' },
    { id: 'wisconsin', seed: 27, name: 'Wisconsin', record: '8-4', conference: 'Big Ten', rank: 27, color: '#C5050C' },
    { id: 'lsu', seed: 28, name: 'LSU', record: '8-4', conference: 'SEC', rank: 28, color: '#461D7C' },
    { id: 'kansasstate', seed: 29, name: 'Kansas State', record: '8-4', conference: 'Big 12', rank: 29, color: '#512888' },
    { id: 'clemson', seed: 30, name: 'Clemson', record: '8-4', conference: 'ACC', rank: 30, color: '#F56600' },
    { id: 'missouri', seed: 31, name: 'Missouri', record: '8-4', conference: 'SEC', rank: 31, color: '#F1B82D' },
    { id: 'oklahomastate', seed: 32, name: 'Oklahoma State', record: '8-4', conference: 'Big 12', rank: 32, color: '#FF7300' },
];
