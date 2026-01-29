import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

export default function App() {
  const profileImage = 'https://images.unsplash.com/photo-1750741268857-7e44510f867d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMHN0YW5kaW5nJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5NDMzNDQxfDA&ixlib=rb-4.1.0&q=80&w=1080';

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navigation />
      <div id="home">
        <Hero profileImage={profileImage} />
      </div>
      <Services />
      <About profileImage={profileImage} />
      <Portfolio />
      <Contact />
    </div>
  );
}
