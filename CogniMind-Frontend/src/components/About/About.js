import "./About.css";
import { Container} from "react-bootstrap";

function About() {
  return (
    <div className="About">
    <Container>
      <div className="p-5 mb-4 ">
        <div className="container-fluid py-5">
            <p className="fline">Depression, identified by the WHO as a leading cause of global disability, affects over 300 million individuals worldwide, with only 20% receiving professional assistance. <br></br> <br></br>
              Currently, diagnosis heavily relies on verbal assessments. Electroencephalography (EEG), a method monitoring scalp electrical activity, shows promise in detecting Major Depressive Disorder (MDD) by capturing brain surface activity. However, interpreting the intricate EEG signals, which are complex, nonlinear and non-stationary, poses a significant challenge.
              <br></br> <br></br>
Our initiative, CogniMind, focuses on diagnosing MDD through Machine Learning analysis of EEG signals. Our system offers a reliable and swift diagnosis, simplifying the process for healthcare professionals. By providing an intuitive interface for uploading patient EEG data and accessing ML-based analyses, we centralize patient records for ease of reference.
<br></br> <br></br>
CogniMind aims to enhance neurological practices, ensuring superior patient care and improved operational efficiency. Our goal is to expand access to dependable and rapid depression diagnoses, ultimately benefiting humanity.
</p>
       </div>
      </div>
      </Container>
    </div>
  );
}

export default About;
