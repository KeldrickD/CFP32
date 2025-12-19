import { useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { BracketView } from './views/BracketView';
import { MapView } from './views/MapView';
import { TimelineView } from './views/TimelineView';
import { CommissionView } from './views/CommissionView';
import { HowItWorksView } from './views/HowItWorksView';
import { WhyItWinsView } from './views/WhyItWinsView';

type Tab = 'bracket' | 'map' | 'timeline' | 'commission' | 'how-it-works' | 'why-it-wins';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('how-it-works');

  return (
    <AppLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'how-it-works' && <HowItWorksView onNavigateToBracket={() => setActiveTab('bracket')} />}
      {activeTab === 'bracket' && <BracketView />}
      {activeTab === 'map' && <MapView />}
      {activeTab === 'timeline' && <TimelineView />}
      {activeTab === 'commission' && <CommissionView />}
      {activeTab === 'why-it-wins' && <WhyItWinsView />}
    </AppLayout>
  );
}

export default App;
