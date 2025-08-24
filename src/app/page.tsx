import HeroSection from '../components/SimpleHero';
import DomainPage from '../components/DomainPage';
import RegistrationPageSimple from '../components/RegistrationPageSimple';
import ScrollNavigation from '../components/ScrollNavigation';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<DomainPage />
			<RegistrationPageSimple />
			<ScrollNavigation />
			<Footer />
		</main>
	);
}
