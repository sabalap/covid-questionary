import AboutRedberry from "../../components/AboutRedberry/AboutRedberry";
import PersonalInformation from "../../components/Form/PersonalInformation/PersonalInformation";
const PersonalInformationPage = (props) => {
  return (
    <section className="survey">
      <PersonalInformation />
      {props.page === 1 && <AboutRedberry page={props.page} />}
    </section>
  );
};
export default PersonalInformationPage;
