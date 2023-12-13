import "./Home.css";
import hand from "./Image/hand.png";
import neuro from "./Image/neuro.png";
import doc from "./Image/doctor.png";
import patient from "./Image/hpatient.png";

import { Container} from "react-bootstrap";

function Home() {
  return (
    <div className="Home">
      <Container>
        <div className="p-5 mb-4 ">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">CogniMind</h1>
            <div className="row">
              <div className="col-sm-8">
                <p className="firstt">
                  CogniMind is dedicated to delivering top-tier, dependable, and easily accessible MDD diagnosis through AI, ensuring quality care.
                </p>
                <p className="textt"> We firmly believe that extending access to dependable, swift, and efficient depression diagnosis can profoundly benefit humanity's well-being.</p>
              </div>
              <div className="col-sm-4">
                <img src={hand} className="img1" alt=""/>
              </div>

            </div>
            <hr style={{ borderBottom: "0.35px solid #c2cccc", width: "100%", marginBottom: "37px", opacity: "35%" }} />

            <div className="row">

              <div className="col-sm-5">
                <img src={neuro} className="img2" alt="" />
              </div>
              <div className="col-sm-7">

                <p className="textt"> Our mission is to empower neurology practices, enabling peak performance that leads to exceptional patient care and increased profitability, ultimately enhancing the service provided to both your customers and patients.
                </p>
              </div>

            </div>
            <hr style={{ borderBottom: "0.35px solid #c2cccc", width: "100%", marginTop: "54px", marginBottom: "39px", opacity: "35%" }} />
            <div className="row">
              <div className="col-sm-9">
                <div className="doctor">
                  <h3>For healthcare professionals:</h3>

                  <p>
                    - Access rapid and dependable EEG results for enhanced patient outcomes <br></br>
                    - Efficiently manage patient records and medical histories in one centralized location
                  </p>
                </div>
              </div>
              <div className="col-sm-3">
                <img src={doc} className="img2" alt="" />
              </div>



            </div>
            <hr style={{ borderBottom: "0.35px solid #c2cccc", width: "100%", marginTop: "54px", marginBottom: "37px", opacity: "35%" }} />
            <div className="row">

              <div className="col-sm-5">
                <img src={patient} className="img4" alt="" />
              </div>

              <div className="col-sm-7">
                <div className="doctor">
                  <h3>For Patients-</h3>

                  <p>
                    - Access speedy and reliable results you can trust <br></br>
                    - Conveniently store all your reports digitally in one place for easy access
                  </p>
                </div>
              </div>
            </div>
            <div className="endline">
              <p ><i> Empowering minds, one simple click at a time. CogniMind: Fast. Trustworthy. Always!</i></p>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}

export default Home;
