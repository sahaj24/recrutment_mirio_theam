import HeroSection from '../components/SimpleHero';
import DomainPage from '../components/DomainPage';
import RegistrationPageSimple from '../components/RegistrationPageSimple';
import ScrollNavigation from '../components/ScrollNavigation';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DomainPage />
      <RegistrationPageSimple />
      <ScrollNavigation />
    </main>
  );
}
