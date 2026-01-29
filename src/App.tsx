import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

export default function App() {
  const profileImage = '/profile.png';

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
