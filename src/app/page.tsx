import HeroSection from '../components/SimpleHero';
import DomainPage from '../components/DomainPage';
import RegistrationPageSimple from '../components/RegistrationPageSimple';
import ScrollNavigation from '../components/ScrollNavigation';
import Narrator from '../components/Narrator';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Narrator 
        position="top" 
        dialogue="Welcome brave adventurer! 🎮 Ready to join GCSRM? Your epic journey starts here! ✨" 
      />
      <DomainPage />
      <RegistrationPageSimple />
      <ScrollNavigation />
    </main>
  );
}
