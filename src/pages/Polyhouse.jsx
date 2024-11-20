import PolyhouseHero from '../components/polyhouse/PolyhouseHero'
import PolyhouseSolutions from '../components/polyhouse/PolyhouseSolutions'
import PolyhouseExplore from '../components/polyhouse/PolyhouseExplore'
import PolyhouseUnlock from '../components/polyhouse/PolyhouseUnlock'
import ContactSection from '../components/contact/ContactSection'
import PolyhouseFAQ from '../components/polyhouse/PolyhouseFAQ'

const Polyhouse = () => {
  return (
    <>
      {/* Hero */}
      <PolyhouseHero />

      {/* Solutions */}
      <PolyhouseSolutions />

      {/* Explore */}
      <PolyhouseExplore />

      {/* Unlock */}
      <PolyhouseUnlock />

      {/* FAQ */}
      <PolyhouseFAQ />

      {/* Contact */}
      <ContactSection />
    </>
  );
};

export default Polyhouse;
