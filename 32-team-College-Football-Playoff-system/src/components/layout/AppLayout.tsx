import type { ReactNode } from 'react';
import { NavBar } from './NavBar';

type Tab = 'bracket' | 'map' | 'timeline' | 'commission' | 'how-it-works' | 'why-it-wins';

interface AppLayoutProps {
    children: ReactNode;
    activeTab: Tab;
    onTabChange: (tab: Tab) => void;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children, activeTab, onTabChange }) => {
    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden selection:bg-premium-gold selection:text-black">
            <NavBar activeTab={activeTab} onTabChange={onTabChange} />

            <main className="pt-16 h-screen overflow-hidden">
                {children}
            </main>
        </div>
    );
};
