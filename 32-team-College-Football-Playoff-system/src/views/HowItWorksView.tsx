import { CheckCircle2, Trophy, Calendar, Users, GitBranch, ShieldCheck, Zap, HelpCircle, ChevronDown, ChevronUp, ArrowRight, Activity } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";

interface HowItWorksViewProps {
    onNavigateToBracket: () => void;
}

export const HowItWorksView = ({ onNavigateToBracket }: HowItWorksViewProps) => {
    // FAQ Data
    const faqs = [
        {
            q: "Isn’t 17 games too much?",
            a: "Today’s elite teams already play 15–16 games — often with meaningless bowls and low-effort collisions. CFP32 replaces low-value collisions with high-value competition and compensation. Players aren’t taking more hits — they’re getting paid for the ones they already take."
        },
        {
            q: "Doesn’t this cheapen the regular season?",
            a: "No. It makes it strategic. Every game affects Seeding, Home-field, and Playoff probability. Just like the NFL."
        },
        {
            q: "Won’t small conferences get ignored?",
            a: "No. Every champion gets a platform and a bowl. Performance, not branding, determines access."
        },
        {
            q: "Is this too complicated?",
            a: "Fans run March Madness brackets with 68 teams. CFP32 is simple: Win, advance, get paid."
        }
    ];

    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (idx: number) => {
        setOpenFaqIndex(openFaqIndex === idx ? null : idx);
    };

    const sections = [
        {
            title: "Season Structure",
            icon: <Calendar className="w-8 h-8 text-premium-blue" />,
            content: (
                <div className="space-y-4 text-slate-400">
                    <div>
                        <strong className="text-white block mb-1">Regular Season (12 Games)</strong>
                        <ul className="space-y-2 text-sm mt-2">
                            <li className="flex gap-2 items-start">
                                <div className="w-1.5 h-1.5 bg-premium-blue rounded-full mt-1.5 shrink-0" />
                                <span><strong>Standard 12-Game Season:</strong> August → Thanksgiving.</span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <div className="w-1.5 h-1.5 bg-premium-blue rounded-full mt-1.5 shrink-0" />
                                <span><strong>Mandatory Bye:</strong> Final week of Nov (Recovery).</span>
                            </li>
                            <li className="flex gap-2 items-start">
                                <div className="w-1.5 h-1.5 bg-premium-blue rounded-full mt-1.5 shrink-0" />
                                <span><strong>Less Risk:</strong> Eliminates "cupcake" blowouts where meaningless injuries occur.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <strong className="text-white block mb-1">Playoffs (Dec-Jan)</strong>
                        <ul className="space-y-1 text-sm">
                            <li>5 Rounds, 4 Weekends</li>
                            <li>Begins first weekend of December</li>
                        </ul>
                    </div>
                </div>
            )
        },
        {
            title: "Max Games Per Team",
            icon: <Activity className="w-8 h-8 text-red-500" />,
            content: (
                <div className="space-y-4 text-slate-400">
                    <p className="text-sm border-l-2 border-red-500 pl-3 font-semibold text-white"> A playoff champion plays:</p>
                    <ul className="space-y-2 text-sm mt-2">
                        <li className="flex justify-between"><span>Regular Season</span> <span className="font-mono text-white">12</span></li>
                        <li className="flex justify-between"><span>Playoff Games</span> <span className="font-mono text-white">5</span></li>
                        <li className="flex justify-between border-t border-slate-700 pt-1 text-white font-bold"><span>Total</span> <span className="font-mono text-premium-gold">17</span></li>
                    </ul>
                    <p className="text-xs text-slate-500">Comparable to Division I FCS playoffs and NFL regular season (fewer than NFL finalist).</p>
                </div>
            )
        },
        {
            title: "Selection & Seeding",
            icon: <ShieldCheck className="w-8 h-8 text-premium-gold" />,
            content: (
                <div className="space-y-4 text-slate-400">
                    <p className="text-sm">Teams are ranked using objective metrics, not politics.</p>
                    <div className="flex flex-wrap gap-2 text-xs font-bold uppercase text-slate-500">
                        <span className="bg-slate-900 border border-slate-700 px-2 py-1 rounded">Record</span>
                        <span className="bg-slate-900 border border-slate-700 px-2 py-1 rounded">Strength of Schedule</span>
                        <span className="bg-slate-900 border border-slate-700 px-2 py-1 rounded">Efficiency</span>
                        <span className="bg-slate-900 border border-slate-700 px-2 py-1 rounded">Quality Wins</span>
                        <span className="bg-slate-900 border border-slate-700 px-2 py-1 rounded">Injury-Adj Perf</span>
                    </div>
                </div>
            )
        },
        {
            title: "Bowl Integration",
            icon: <Trophy className="w-8 h-8 text-premium-blue" />,
            content: (
                <div className="space-y-2 text-slate-400">
                    <p className="text-sm border-l-2 border-premium-blue pl-3 font-semibold text-white">Every playoff game is a bowl game.</p>
                    <ul className="space-y-2 text-sm mt-2">
                        <li><span className="text-premium-blue font-bold">R32:</span> 16 Regional Bowls</li>
                        <li><span className="text-premium-blue font-bold">S16:</span> 8 Premium Bowls</li>
                        <li><span className="text-premium-blue font-bold">E8:</span> 4 Major Bowls (NY6)</li>
                        <li><span className="text-premium-blue font-bold">F4:</span> 2 Semifinal Bowls</li>
                        <li><span className="text-premium-blue font-bold">NC:</span> 1 Championship Bowl</li>
                    </ul>
                    <p className="text-xs text-slate-500 mt-2">Bowls don't disappear — they become central.</p>
                </div>
            )
        },
        {
            title: "Conference Championships",
            icon: <Users className="w-8 h-8 text-premium-gold" />,
            content: (
                <div className="space-y-3 text-slate-400">
                    <p className="text-sm"><strong className="text-white">Option A: No Title Game</strong><br />Champion determined by record & tiebreakers (H2H, Common Opponents, etc).</p>
                    <p className="text-sm mt-2"><strong className="text-white">Option B: Title Game Allowed</strong><br />Played early Dec. Counts toward 13-game total. Playoff logistics adjust.</p>
                </div>
            )
        },
        {
            title: "Non-Playoff Conferences",
            icon: <CheckCircle2 className="w-8 h-8 text-premium-green" />,
            content: (
                <div className="space-y-3 text-slate-400">
                    <p className="text-sm">Champions who don't qualify receive:</p>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                        <li>Championship Bowl Placement</li>
                        <li>Primetime Slot</li>
                        <li>Trophy + Media Rights</li>
                        <li>Revenue Share</li>
                    </ul>
                    <p className="text-xs text-slate-500 italic">Every champion has a platform. Every game has stakes.</p>
                </div>
            )
        },
        {
            title: "Why It Wins",
            icon: <Zap className="w-8 h-8 text-premium-gold" />,
            content: (
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                    <div className="bg-slate-900 px-3 py-2 rounded flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-premium-green" /> More Access</div>
                    <div className="bg-slate-900 px-3 py-2 rounded flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-premium-green" /> More Parity</div>
                    <div className="bg-slate-900 px-3 py-2 rounded flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-premium-green" /> More Storylines</div>
                    <div className="bg-slate-900 px-3 py-2 rounded flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-premium-green" /> 5-8x Revenue</div>
                    <div className="bg-slate-900 px-3 py-2 rounded flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-premium-green" /> Recruitment</div>
                    <div className="bg-slate-900 px-3 py-2 rounded flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-premium-green" /> Fan Chaos</div>
                </div>
            )
        }
    ];

    return (
        <div className="h-full overflow-y-auto bg-slate-950 px-6 py-12 md:px-12 relative">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* HERO SECTION */}
                <div className="text-center space-y-8 animate-in slide-in-from-bottom-5 fade-in duration-700 py-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-premium-blue/10 border border-premium-blue/20 rounded-full text-premium-blue text-xs font-bold uppercase tracking-widest mb-4">
                        The Future of College Football
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                        Starts <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-blue to-premium-gold">Here</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        A 32-team playoff embedded into the bowl system — delivering bigger games, higher stakes, and <span className="text-white font-semibold">5–8× more revenue</span> with a modern <span className="text-white font-semibold">17-game season</span> built for today's athletes.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
                        <button
                            onClick={onNavigateToBracket}
                            className="px-8 py-4 bg-premium-blue hover:bg-blue-600 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-premium-blue/50 uppercase tracking-widest text-sm flex items-center justify-center gap-2 group"
                        >
                            Explore the Bracket <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-12 opacity-60">
                        <div className="text-center">
                            <div className="text-2xl font-black text-white">32</div>
                            <div className="text-xs uppercase tracking-widest text-slate-500">Teams</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-black text-white">31</div>
                            <div className="text-xs uppercase tracking-widest text-slate-500">Playoff Bowls</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-black text-white">17</div>
                            <div className="text-xs uppercase tracking-widest text-slate-500">Max Games</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-black text-white">0</div>
                            <div className="text-xs uppercase tracking-widest text-slate-500">Politics</div>
                        </div>
                    </div>
                </div>

                {/* PROBLEM / SOLUTION SPLIT */}
                <div className="grid md:grid-cols-2 gap-12 border-t border-slate-800 pt-20">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">The Problem</h2>
                        <p className="text-slate-400 text-lg">College football has outgrown its postseason.</p>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />Only 3 meaningful postseason games</li>
                            <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />40+ meaningless bowls with opt-outs</li>
                            <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />Politics deciding access</li>
                            <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />Stagnant revenue & empty stadiums</li>
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">The Solution</h2>
                        <p className="text-slate-400 text-lg">A scalable, equitable, commercially explosive playoff.</p>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2" />32 Teams, 31 Playoff Bowls</li>
                            <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2" />Full Stadiums & High Visibility</li>
                            <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2" />National Stakes for 2 Months</li>
                            <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-premium-green mt-2" />The Scale of the NFL with the Energy of March Madness</li>
                        </ul>
                    </div>
                </div>

                {/* CONTENT GRID */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <GitBranch className="w-6 h-6 text-premium-gold" />
                        <h2 className="text-sm font-bold text-premium-gold uppercase tracking-[0.2em]">System Architecture</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sections.map((section, idx) => (
                            <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:bg-slate-900/80 transition-all group">
                                <div className="mb-4 flex justify-between items-start">
                                    <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:border-premium-blue/30 transition-colors shadow-lg">
                                        {section.icon}
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-600 font-mono text-xs">0{idx + 1}</div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                                {section.content}
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ SECTION */}
                <div className="max-w-4xl mx-auto pt-10">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <HelpCircle className="w-8 h-8 text-slate-600" />
                        <h2 className="text-3xl font-black text-white text-center">FAQ & Rebuttals</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={clsx(
                                    "bg-slate-900/30 border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer",
                                    openFaqIndex === idx ? "border-premium-blue bg-slate-900/80 shadow-lg" : "border-slate-800 hover:bg-slate-900/50"
                                )}
                                onClick={() => toggleFaq(idx)}
                            >
                                <div className="p-6 flex justify-between items-center gap-4">
                                    <h3 className={clsx("font-bold text-lg", openFaqIndex === idx ? "text-white" : "text-slate-300")}>
                                        {faq.q}
                                    </h3>
                                    {openFaqIndex === idx ? <ChevronUp className="w-5 h-5 text-premium-blue" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                                </div>

                                <div className={clsx(
                                    "px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4",
                                    openFaqIndex === idx ? "block" : "hidden"
                                )}>
                                    {faq.a}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FOOTER */}
                <div className="text-center pt-12 pb-20 border-t border-slate-800/50">
                    <p className="text-slate-500 text-sm uppercase tracking-widest font-mono mb-4">
                        Be Part of the Movement
                    </p>
                    <div className="flex justify-center gap-8 text-slate-400 text-sm">
                        <a href="mailto:hello@cfp32.org" className="hover:text-white transition-colors">Press & Partnerships</a>
                        <a href="#" className="hover:text-white transition-colors">Manifesto</a>
                    </div>
                    <p className="mt-8 text-slate-600 text-xs">© 2024 CFP32 • Designed for athletes, built for fans. Powered by data.</p>
                </div>

            </div>
        </div>
    );
};
