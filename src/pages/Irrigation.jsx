import IrrigationSystems from "../components/irrigations/IrrigationSystems";
import IrrigationSolutions from "../components/irrigations/IrrigationSolutions";
import IrrigationServices from "../components/irrigations/IrrigationServices";
import IrrigationSystemmid from "../components/irrigations/IrrigationSystemmid";
import FAQs from "../components/irrigations/FAQs";
import ContactSection from "../components/irrigations/ContactSection";
function Irrigation() {
  return (
    <>
      <IrrigationSystems />
      <IrrigationSolutions />
      <IrrigationServices />
      <IrrigationSystemmid />
      <FAQs />
      <ContactSection />
    </>
  );
}

export default Irrigation;
