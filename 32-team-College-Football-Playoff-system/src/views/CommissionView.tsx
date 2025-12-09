import { CircleCheck, CircleX, Shield, Brain, Gavel } from 'lucide-react';

export const CommissionView = () => {
    return (
        <div className="h-full overflow-y-auto bg-slate-950 px-6 py-12 md:px-12">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                        From Subjective Selection <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-premium-blue to-premium-gold">
                            To System Governance
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        The role of leadership shifts from picking winners to building the architecture that lets them prove it.
                    </p>
                </div>

                {/* Comparison Cards */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Old Model */}
                    <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CircleX className="w-24 h-24 text-red-500" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-xl font-bold text-slate-300 mb-6 flex items-center gap-2">
                                <Gavel className="w-5 h-5" /> The Old Committee
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-500">
                                    <CircleX className="w-5 h-5 text-red-900 shrink-0" />
                                    <span>Rank teams subjectively</span>
                                </li>
                                <li className="flex gap-3 text-slate-500">
                                    <CircleX className="w-5 h-5 text-red-900 shrink-0" />
                                    <span>Debate resumes behind closed doors</span>
                                </li>
                                <li className="flex gap-3 text-slate-500">
                                    <CircleX className="w-5 h-5 text-red-900 shrink-0" />
                                    <span>Pick 4 schools (exclude 97%)</span>
                                </li>
                                <li className="flex gap-3 text-slate-500">
                                    <CircleX className="w-5 h-5 text-red-900 shrink-0" />
                                    <span>Defend political decisions weekly</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* New Model */}
                    <div className="bg-slate-900/80 border border-premium-gold/30 p-8 rounded-2xl relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Shield className="w-24 h-24 text-premium-gold" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Brain className="w-5 h-5 text-premium-gold" /> The New Governance
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-300">
                                    <CircleCheck className="w-5 h-5 text-premium-green shrink-0" />
                                    <span>Define & audit objective metrics</span>
                                </li>
                                <li className="flex gap-3 text-slate-300">
                                    <CircleCheck className="w-5 h-5 text-premium-green shrink-0" />
                                    <span>Maintain data standards & integrity</span>
                                </li>
                                <li className="flex gap-3 text-slate-300">
                                    <CircleCheck className="w-5 h-5 text-premium-green shrink-0" />
                                    <span>Manage scheduling & NIL economics</span>
                                </li>
                                <li className="flex gap-3 text-slate-300">
                                    <CircleCheck className="w-5 h-5 text-premium-green shrink-0" />
                                    <span>Distribute revenue & run the tourney</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Impact Statement */}
                <div className="text-center py-8 border-t border-slate-800">
                    <div className="inline-flex items-center gap-6 text-xl md:text-2xl font-black uppercase tracking-wide text-white">
                        <span>Less Politics</span>
                        <span className="text-slate-700">•</span>
                        <span>More Power</span>
                        <span className="text-slate-700">•</span>
                        <span>More Transparency</span>
                    </div>
                </div>

            </div>
        </div>
    );
};
