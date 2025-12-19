import { useState } from 'react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const TIMELINE_PHASES = [
    {
        id: 'regular',
        label: 'Regular Season',
        date: 'Aug - Nov',
        description: '12 Games',
        details: [
            "Week 1: Labor Day Weekend",
            "Week 12: Thanksgiving Weekend",
            "Rivalry traditions preserved intact"
        ]
    },
    {
        id: 'bye',
        label: 'The Bye',
        date: 'Late Nov',
        description: 'Recovery',
        details: [
            "Mandatory recovery week",
            "Final rankings calculation",
            "Team travel logistics prep"
        ]
    },
    {
        id: 'r32',
        label: 'Round of 32',
        date: 'Dec 1-3',
        description: '16 Games',
        details: [
            "First Weekend of December",
            "16 Regional Bowls / Campus Sites",
            "National Chaos Weekend"
        ]
    },
    {
        id: 's16',
        label: 'Sweet 16',
        date: 'Dec 8-10',
        description: '8 Games',
        details: [
            "Second Weekend of December",
            "Hosted by Premium Bowls",
            "Standard elimination format"
        ]
    },
    {
        id: 'e8',
        label: 'Elite 8',
        date: 'Dec 15-17',
        description: '4 Games',
        details: [
            "Third Weekend of December",
            "Major Bowl Hosting (Rotation)",
            "The Quarterfinals of College Football"
        ]
    },
    {
        id: 'f4',
        label: 'Final 4',
        date: 'Jan 1 (NYD)',
        description: '2 Games',
        details: [
            "New Year's Day Tradition",
            "Rose & Sugar (Rotating)",
            "Saturday Night Primetime"
        ]
    },
    {
        id: 'natty',
        label: 'Championship',
        date: 'Jan 10',
        description: 'The Big One',
        details: [
            "Second Weekend of January",
            "3 Weeks Before Super Bowl",
            "Zero NFL Competition"
        ]
    }
];

export const TimelineView = () => {
    const [activePhaseIndex, setActivePhaseIndex] = useState(0);
    const activePhase = TIMELINE_PHASES[activePhaseIndex];

    return (
        <div className="h-full bg-slate-950 flex flex-col items-center justify-center p-8 relative overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10" />

            <div className="max-w-6xl w-full z-10 flex flex-col md:flex-row gap-12 items-center h-full overflow-y-auto md:overflow-hidden">

                {/* Left: Narrative Content */}
                <div className="flex-1 space-y-8 py-8">
                    <div>
                        <h2 className="text-sm font-bold text-premium-gold uppercase tracking-[0.2em] mb-2">Season Chronology</h2>
                        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
                            "The rhythm of a modern season that <span className="text-premium-blue">peaks</span>, not fizzles."
                        </h1>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePhase.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm shadow-2xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-9xl font-black text-white">{activePhaseIndex + 1}</span>
                            </div>

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-1">{activePhase.label}</h3>
                                    <p className="text-premium-gold font-mono text-lg flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-premium-gold animate-pulse" />
                                        {activePhase.date}
                                    </p>
                                </div>
                                <div className="px-3 py-1 bg-slate-800 rounded text-xs font-bold text-slate-400 uppercase tracking-widest border border-slate-700">
                                    {activePhase.description}
                                </div>
                            </div>

                            <ul className="space-y-4 relative z-10">
                                {activePhase.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-slate-300 text-lg">
                                        <div className="w-1.5 h-1.5 bg-premium-blue rounded-full" />
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>

                    <div className="p-4 border-l-2 border-slate-700 bg-slate-900/30 rounded-r-lg">
                        <p className="text-slate-500 italic text-sm md:text-base">
                            "Total Season Length: 12 regular + 5 playoff rounds. Max 17 games. Aligned with current CFP maximums."
                        </p>
                    </div>
                </div>

                {/* Right: Vertical Interactive Timeline */}
                <div className="w-full md:w-auto flex md:flex-col gap-3 overflow-x-auto md:overflow-visible py-4 md:h-[80%] md:justify-center pr-2">
                    {TIMELINE_PHASES.map((phase, idx) => (
                        <button
                            key={phase.id}
                            onClick={() => setActivePhaseIndex(idx)}
                            className={clsx(
                                "relative group flex items-center gap-4 p-3 rounded-xl transition-all w-64 shrink-0 text-left border",
                                activePhaseIndex === idx
                                    ? "bg-premium-blue border-premium-blue text-white shadow-lg shadow-premium-blue/20 scale-105 z-10"
                                    : "bg-slate-900/50 border-slate-800 text-slate-500 hover:bg-slate-800 hover:text-slate-300 hover:border-slate-700"
                            )}
                        >
                            <div className={clsx(
                                "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors shrink-0",
                                activePhaseIndex === idx ? "bg-white text-premium-blue" : "bg-slate-800"
                            )}>
                                {idx + 1}
                            </div>
                            <div>
                                <div className="font-bold text-sm leading-tight">{phase.label}</div>
                                <div className={clsx("text-[10px]", activePhaseIndex === idx ? "text-blue-100" : "text-slate-600")}>
                                    {phase.date}
                                </div>
                            </div>

                            {/* Connector Line (Vertical) */}
                            {idx < TIMELINE_PHASES.length - 1 && (
                                <div className={clsx(
                                    "absolute left-[1.90rem] top-11 w-[2px] h-4 hidden md:block z-0",
                                    activePhaseIndex > idx ? "bg-premium-blue" : "bg-slate-800"
                                )} />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
