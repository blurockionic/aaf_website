import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ContactSection from "../components/contact/ContactSection";
import ContactOffice from "../components/contact/ContactOffice";
const Contacts = () => {
  return (
    <>
      {/* Hero */}
      <ContactHero />

      {/* Form */}
      <ContactForm />

      {/* Section */}
      <ContactSection />

      {/* Office */}
      <ContactOffice />
    </>
  );
};

export default Contacts;
