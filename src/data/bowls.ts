export interface Bowl {
    id: string;
    name: string;
    city: string;
    state: string;
    coordinates: { lat: number; lng: number }; // For map placement
    round: 'Round of 32' | 'Sweet 16' | 'Elite 8' | 'Final 4' | 'Natty';
}

export const bowls: Bowl[] = [
    // ROUND OF 32 (16 Games)
    { id: 'quicklane', name: 'Quick Lane Bowl', city: 'Detroit', state: 'MI', coordinates: { lat: 42.3314, lng: -83.0458 }, round: 'Round of 32' },
    { id: 'musiccity', name: 'Music City Bowl', city: 'Nashville', state: 'TN', coordinates: { lat: 36.1627, lng: -86.7816 }, round: 'Round of 32' },
    { id: 'gator', name: 'Gator Bowl', city: 'Jacksonville', state: 'FL', coordinates: { lat: 30.3322, lng: -81.6557 }, round: 'Round of 32' },
    { id: 'reliaquest', name: 'ReliaQuest Bowl', city: 'Tampa', state: 'FL', coordinates: { lat: 27.9759, lng: -82.5033 }, round: 'Round of 32' },
    { id: 'alamo', name: 'Alamo Bowl', city: 'San Antonio', state: 'TX', coordinates: { lat: 29.4170, lng: -98.4788 }, round: 'Round of 32' },
    { id: 'sun', name: 'Sun Bowl', city: 'El Paso', state: 'TX', coordinates: { lat: 31.7735, lng: -106.5080 }, round: 'Round of 32' },
    { id: 'texas', name: 'Texas Bowl', city: 'Houston', state: 'TX', coordinates: { lat: 29.6847, lng: -95.4107 }, round: 'Round of 32' },
    { id: 'citrus', name: 'Citrus Bowl', city: 'Orlando', state: 'FL', coordinates: { lat: 28.5392, lng: -81.4028 }, round: 'Round of 32' },
    { id: 'holiday', name: 'Holiday Bowl', city: 'San Diego', state: 'CA', coordinates: { lat: 32.7831, lng: -117.1196 }, round: 'Round of 32' },
    { id: 'la', name: 'LA Bowl', city: 'Inglewood', state: 'CA', coordinates: { lat: 33.9535, lng: -118.3390 }, round: 'Round of 32' },
    { id: 'dukes', name: "Duke's Mayo Bowl", city: 'Charlotte', state: 'NC', coordinates: { lat: 35.2258, lng: -80.8528 }, round: 'Round of 32' },
    { id: 'pinstripe', name: 'Pinstripe Bowl', city: 'New York', state: 'NY', coordinates: { lat: 40.8296, lng: -73.9262 }, round: 'Round of 32' },
    { id: 'peach', name: 'Peach Bowl', city: 'Atlanta', state: 'GA', coordinates: { lat: 33.7554, lng: -84.4010 }, round: 'Round of 32' },
    { id: 'guaranteedrate', name: 'Guaranteed Rate Bowl', city: 'Phoenix', state: 'AZ', coordinates: { lat: 33.4484, lng: -112.0740 }, round: 'Round of 32' },
    { id: 'liberty', name: 'Liberty Bowl', city: 'Memphis', state: 'TN', coordinates: { lat: 35.1207, lng: -89.9774 }, round: 'Round of 32' },
    { id: 'military', name: 'Military Bowl', city: 'Annapolis', state: 'MD', coordinates: { lat: 38.9830, lng: -76.4953 }, round: 'Round of 32' },

    // SWEET 16 (8 Games) - Using the ones listed in Prompt as R16. Note: Prompt re-lists Alamo, Texas, Music City, Holiday, Sun, Gator.
    // I will append _16 to ID to distinguish or just use same Bowl object logic later. For now, separate entries for specific round slots if needed, or just unique bowls.
    // The user prompt lists specific bowls for R16: "Outback, Cheez-It, Holiday, Alamo, Texas, Music City, Sun, Gator".
    // Note: Outback is ReliaQuest now. Cheez-It is Pop-Tarts? Or Citrus? I'll use IDs.
    { id: 'outback_16', name: 'Outback Bowl (ReliaQuest)', city: 'Tampa', state: 'FL', coordinates: { lat: 27.9759, lng: -82.5033 }, round: 'Sweet 16' },
    { id: 'cheezit_16', name: 'Cheez-It Bowl', city: 'Orlando', state: 'FL', coordinates: { lat: 28.5392, lng: -81.4028 }, round: 'Sweet 16' },

    // ELITE 8 (NY6)
    { id: 'rose', name: 'Rose Bowl', city: 'Pasadena', state: 'CA', coordinates: { lat: 34.1613, lng: -118.1676 }, round: 'Elite 8' },
    { id: 'sugar', name: 'Sugar Bowl', city: 'New Orleans', state: 'LA', coordinates: { lat: 29.9511, lng: -90.0812 }, round: 'Elite 8' },
    { id: 'orange', name: 'Orange Bowl', city: 'Miami Gardens', state: 'FL', coordinates: { lat: 25.9580, lng: -80.2389 }, round: 'Elite 8' },
    { id: 'fiesta', name: 'Fiesta Bowl', city: 'Glendale', state: 'AZ', coordinates: { lat: 33.5276, lng: -112.2626 }, round: 'Elite 8' },

    // FINAL 4 (Using Rose/Sugar as prompt example)
    { id: 'rose_semi', name: 'Rose Bowl (Semi)', city: 'Pasadena', state: 'CA', coordinates: { lat: 34.1613, lng: -118.1676 }, round: 'Final 4' },
    { id: 'sugar_semi', name: 'Sugar Bowl (Semi)', city: 'New Orleans', state: 'LA', coordinates: { lat: 29.9511, lng: -90.0812 }, round: 'Final 4' },

    // NATTY
    { id: 'natty', name: 'National Championship', city: 'Atlanta', state: 'GA', coordinates: { lat: 33.7554, lng: -84.4010 }, round: 'Natty' },
];
