import { Trophy, Map, Calendar, Scale, BookOpen, ThumbsUp } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type Tab = 'bracket' | 'map' | 'timeline' | 'commission' | 'how-it-works' | 'why-it-wins';

interface NavBarProps {
    activeTab: Tab;
    onTabChange: (tab: Tab) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ activeTab, onTabChange }) => {
    const tabs: { id: Tab; label: string; icon: React.FC<{ className?: string }> }[] = [
        { id: 'how-it-works', label: 'How It Works', icon: BookOpen },
        { id: 'bracket', label: 'Bracket', icon: Trophy },
        { id: 'map', label: 'Bowls & Map', icon: Map },
        { id: 'timeline', label: 'Season Timeline', icon: Calendar },
        { id: 'commission', label: 'Governance', icon: Scale },
        { id: 'why-it-wins', label: 'Why It Wins', icon: ThumbsUp },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-slate-950/80 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
                <div className="text-2xl font-black bg-gradient-to-r from-premium-blue to-premium-gold bg-clip-text text-transparent italic tracking-tighter">
                    CFP 32
                </div>
            </div>

            <div className="flex items-center gap-1">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={twMerge(
                                "relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 group",
                                isActive ? "text-white" : "text-slate-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <Icon className={clsx("w-5 h-5", isActive && "text-premium-gold")} />
                            <span className="font-semibold tracking-wide text-sm">{tab.label.toUpperCase()}</span>

                            {isActive && (
                                <div className="absolute inset-0 bg-white/5 rounded-lg border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.2)]" />
                            )}
                            {isActive && (
                                <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-premium-blue to-premium-gold shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                            )}
                        </button>
                    );
                })}
            </div>

            <div className="w-24">
                {/* Placeholder for user/settings or extra branding */}
            </div>
        </nav>
    );
};
