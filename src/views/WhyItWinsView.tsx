import { TrendingUp, Users, Tv, Coins, Building2, Calculator, Trophy, HeartPulse } from "lucide-react";
import { useState } from "react";


export const WhyItWinsView = () => {
    // Economic Calculator State
    const [viewers, setViewers] = useState(25); // Million
    const [cpm, setCpm] = useState(45); // $
    const [ticketPrice, setTicketPrice] = useState(250); // $
    const [capacity] = useState(65000); // Seats (Fixed avg)
    const [sponsorship, setSponsorship] = useState(15); // Million per game

    // Calculations
    const broadcastRev = viewers * 1000000 * (cpm / 1000);
    const ticketRev = capacity * ticketPrice;
    const totalPerGame = broadcastRev + ticketRev + (sponsorship * 1000000);
    const totalTourney = totalPerGame * 31;

    // Current CFP Rev (approx)
    const currentCfpRev = 1800000000;

    return (
        <div className="h-full overflow-y-auto bg-slate-950 px-6 py-12 md:px-12">
            <div className="max-w-6xl mx-auto space-y-24">

                {/* 1. REVENUE MODEL */}
                <div className="space-y-8 animate-in slide-in-from-bottom-5 fade-in duration-700">
                    <div className="flex items-center gap-4 mb-8">
                        <TrendingUp className="w-8 h-8 text-premium-green" />
                        <h2 className="text-3xl font-black text-white uppercase tracking-tighter">The Revenue Engine</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">The Most Scalable Postseason in Sports</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Current CFP has <span className="text-white font-bold">3 meaningful games</span>.
                                CFP32 creates <span className="text-premium-gold font-bold">31 meaningful games</span>.
                                That is a 10x increase in premium inventory.
                            </p>

                            <div className="space-y-4 pt-4">
                                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-slate-400 font-bold">Media Rights</span>
                                        <span className="text-premium-green font-bold">+400-700%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                        <div className="bg-premium-green h-full w-[85%]" />
                                    </div>
                                </div>

                                {/* Market Tiers */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-slate-900/30 rounded-lg border border-slate-800/50">
                                        <div className="text-xs text-premium-gold font-bold uppercase tracking-wider mb-1">Tier 1</div>
                                        <div className="text-sm font-bold text-white">Tournament Partners</div>
                                        <div className="text-[10px] text-slate-500">National Brands, Naming Rights</div>
                                    </div>
                                    <div className="p-3 bg-slate-900/30 rounded-lg border border-slate-800/50">
                                        <div className="text-xs text-premium-gold font-bold uppercase tracking-wider mb-1">Tier 2</div>
                                        <div className="text-sm font-bold text-white">Bowl Partners</div>
                                        <div className="text-[10px] text-slate-500">Auto, Airline, CPG</div>
                                    </div>
                                    <div className="p-3 bg-slate-900/30 rounded-lg border border-slate-800/50">
                                        <div className="text-xs text-premium-gold font-bold uppercase tracking-wider mb-1">Tier 3</div>
                                        <div className="text-sm font-bold text-white">Team NIL</div>
                                        <div className="text-[10px] text-slate-500">Regional, Ecommerce</div>
                                    </div>
                                    <div className="p-3 bg-slate-900/30 rounded-lg border border-slate-800/50">
                                        <div className="text-xs text-premium-gold font-bold uppercase tracking-wider mb-1">Tier 4</div>
                                        <div className="text-sm font-bold text-white">Fan Economy</div>
                                        <div className="text-[10px] text-slate-500">Merch, Digital, Memberships</div>
                                    </div>
                                </div>

                                <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-slate-400 font-bold">Ticketing & Attendance</span>
                                        <span className="text-premium-green font-bold">+200-350%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                        <div className="bg-premium-green h-full w-[60%]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Calculator */}
                        <div className="bg-slate-900/80 border border-slate-700 p-6 rounded-2xl shadow-2xl">
                            <div className="flex items-center gap-2 mb-6 border-b border-slate-700 pb-4">
                                <Calculator className="w-5 h-5 text-premium-blue" />
                                <h3 className="text-lg font-bold text-white">Impact Simulator</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-slate-400">Viewers (Example avg)</span>
                                        <span className="text-white font-mono">{viewers}M</span>
                                    </div>
                                    <input type="range" min="5" max="50" value={viewers} onChange={(e) => setViewers(Number(e.target.value))} className="w-full accent-premium-blue" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-slate-400">Est. Broadcast CPM</span>
                                        <span className="text-white font-mono">${cpm}</span>
                                    </div>
                                    <input type="range" min="20" max="100" value={cpm} onChange={(e) => setCpm(Number(e.target.value))} className="w-full accent-premium-blue" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-slate-400">Avg Ticket Price</span>
                                        <span className="text-white font-mono">${ticketPrice}</span>
                                    </div>
                                    <input type="range" min="100" max="500" value={ticketPrice} onChange={(e) => setTicketPrice(Number(e.target.value))} className="w-full accent-premium-blue" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-slate-400">Sponsorship (Per Game)</span>
                                        <span className="text-white font-mono">${sponsorship}M</span>
                                    </div>
                                    <input type="range" min="5" max="30" value={sponsorship} onChange={(e) => setSponsorship(Number(e.target.value))} className="w-full accent-premium-blue" />
                                </div>

                                <div className="pt-6 border-t border-slate-700">
                                    <div className="flex justify-between items-end mb-2">
                                        <span className="text-sm text-slate-400">Projected Total Revenue</span>
                                        <span className="text-2xl font-black text-premium-gold animate-pulse">
                                            ${(totalTourney / 1000000000).toFixed(2)}B
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-xs text-slate-500">
                                        <span>Current CFP: ~$1.8B</span>
                                        <span className="text-premium-green">
                                            +{((totalTourney - currentCfpRev) / currentCfpRev * 100).toFixed(0)}% Growth
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. PLAYER WELFARE & NIL */}
                <div className="space-y-8 border-t border-slate-800 pt-12">
                    <div className="flex items-center gap-4 mb-4">
                        <HeartPulse className="w-8 h-8 text-red-500" />
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Player Welfare & NIL</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-red-500/30 transition-colors">
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <span className="bg-red-500/20 text-red-500 text-xs px-2 py-1 rounded">Health</span>
                                17-Game Max Season
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                CFP32 delivers a max season (12 regular + 5 playoff) identical to the NFL regular season. Includes a mandatory late-Nov Bye Week and reduced travel via regional brackets.
                            </p>
                        </div>
                        <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-premium-gold/30 transition-colors">
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <span className="bg-premium-gold/20 text-premium-gold text-xs px-2 py-1 rounded">Wealth</span>
                                Financial Transformation
                            </h3>
                            <ul className="space-y-2 text-slate-400 text-xs leading-relaxed">
                                <li className="flex gap-2">
                                    <div className="w-1 h-1 bg-premium-gold rounded-full mt-1.5" />
                                    <span><strong>Success Bonuses:</strong> Per-win playoff payouts & media share.</span>
                                </li>
                                <li className="flex gap-2">
                                    <div className="w-1 h-1 bg-premium-gold rounded-full mt-1.5" />
                                    <span><strong>Individual NIL:</strong> Performance contracts & Bowl MVP endorsements.</span>
                                </li>
                                <li className="flex gap-2">
                                    <div className="w-1 h-1 bg-premium-gold rounded-full mt-1.5" />
                                    <span><strong>Equity Model:</strong> "Revenue Share Pool" for participating rosters.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                <span className="bg-blue-500/20 text-blue-500 text-xs px-2 py-1 rounded">Roster</span>
                                Better Management
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Encourages larger rosters, specialist rotations, and redshirt flexibility. Better football, fewer injuries per player, more opportunity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. MEDIA INNOVATION */}
                <div className="space-y-8 border-t border-slate-800 pt-12">
                    <div className="flex items-center gap-4 mb-4">
                        <Tv className="w-8 h-8 text-premium-blue" />
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Media & Broadcast</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white">A Two-Month National Blockbuster</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-premium-blue mt-2" />Broadcast + Cable + Streaming mix</li>
                                <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-premium-blue mt-2" />Multi-network strategy (no monopoly)</li>
                                <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-premium-blue mt-2" />Zero exhibition games, no dead weeks</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white">Second-Screen Experience</h3>
                            <ul className="space-y-3">
                                <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-premium-blue mt-2" />Live Analytics & Win Probability</li>
                                <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-premium-blue mt-2" />Interactive Bracket Tracking</li>
                                <li className="flex gap-3 text-slate-400"><div className="w-1.5 h-1.5 rounded-full bg-premium-blue mt-2" />Every weekend is a cultural moment</li>
                            </ul>
                        </div>
                    </div>
                </div>


                {/* 4. STAKEHOLDER WINS */}
                <div className="space-y-8 border-t border-slate-800 pt-12">
                    <div className="flex items-center gap-4 mb-4">
                        <Users className="w-8 h-8 text-premium-gold" />
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Everyone Wins</h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Player */}
                        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                            <Users className="w-6 h-6 text-slate-500 mb-2" />
                            <h4 className="font-bold text-white">Players</h4>
                            <p className="text-xs text-slate-500 mt-1">Higher comp, better exposure, safer conditions.</p>
                        </div>
                        {/* Schools */}
                        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                            <Building2 className="w-6 h-6 text-slate-500 mb-2" />
                            <h4 className="font-bold text-white">Schools</h4>
                            <p className="text-xs text-slate-500 mt-1">More revenue, stronger recruiting, national relevance.</p>
                        </div>
                        {/* Fans */}
                        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                            <Trophy className="w-6 h-6 text-slate-500 mb-2" />
                            <h4 className="font-bold text-white">Fans</h4>
                            <p className="text-xs text-slate-500 mt-1">Chaos, emotion, stories. No meaningless football.</p>
                        </div>
                        {/* Bowls */}
                        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                            <Trophy className="w-6 h-6 text-slate-500 mb-2" />
                            <h4 className="font-bold text-white">Bowls</h4>
                            <p className="text-xs text-slate-500 mt-1">Stakes restored. Sustainable business models.</p>
                        </div>
                        {/* Networks */}
                        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                            <Tv className="w-6 h-6 text-slate-500 mb-2" />
                            <h4 className="font-bold text-white">Networks</h4>
                            <p className="text-xs text-slate-500 mt-1">Winter content monopoly. Predictable slots.</p>
                        </div>
                        {/* Conferences */}
                        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                            <Users className="w-6 h-6 text-slate-500 mb-2" />
                            <h4 className="font-bold text-white">Conferences</h4>
                            <p className="text-xs text-slate-500 mt-1">Identity maintained. Power retained. Rev expanded.</p>
                        </div>
                    </div>
                </div>

                {/* 5. ECONOMIC IMPACT */}
                <div className="space-y-8 border-t border-slate-800 pt-12 pb-12">
                    <div className="flex items-center gap-4 mb-4">
                        <Coins className="w-8 h-8 text-premium-green" />
                        <h2 className="text-2xl font-bold text-white uppercase tracking-tight">National Economic Engine</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 text-center">
                            <div className="text-4xl font-black text-white mb-2">$35-80M</div>
                            <div className="text-sm uppercase tracking-widest text-premium-green font-bold">Local Impact Per Game</div>
                            <p className="text-slate-500 text-xs mt-4">Hotels, Bars, Travel, Hospitality, Retail</p>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 text-center">
                            <div className="text-4xl font-black text-white mb-2">$1.0-1.7B</div>
                            <div className="text-sm uppercase tracking-widest text-premium-green font-bold">Tournament-Wide Impact</div>
                            <p className="text-slate-500 text-xs mt-4">College Football becomes a tourism driver, not just a TV product.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
