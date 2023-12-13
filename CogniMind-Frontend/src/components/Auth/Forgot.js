import "./auth.css";
import { useReducer } from "react";
import formreducer from "../../reducers/formreducer";
import Error from "../Error/Error";

const defaultState = {
  role: "",
  email: "",
  username: "",
};

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent the default form submission
};


const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};

function Forgot() {
  const [formstate, dispatchState] = useReducer(formreducer, defaultState);
  const [errors, dispatchErrors] = useReducer(formreducer, defaultState);

  return (
    <div className="App">
      <section>
        <div className="container">
          <div className="user signinBx">
            <div className="imgBx">
              <img
                src="https://www.statnews.com/wp-content/uploads/2020/01/AdobeStock_215322148-645x645.jpg"
                alt=""
              />
            </div>
            <div className="formBx">
              <form action="" onSubmit={handleSubmit} autoComplete="on">
                <h2>Forgot Password?</h2>
                <p className="signup">
                  Enter the email address associated with your account and we'll
                  send you a link to reset your password.
                </p>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.value],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK",
                      data: [formstate, e.target.name],
                    });
                  }}
                />
                <Error error={errors.email} />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.value],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK",
                      data: [formstate, e.target.name],
                    });
                  }}
                />
                <Error error={errors.username} />
                <select
                  id="role"
                  name="role"
                  value={formstate.role}
                  placeholder="Select your Role"
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.value],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK",
                      data: [formstate, e.target.name],
                    });
                  }}
                >
                  <option value="" disabled>
                    Select your Role
                  </option>
                  <option value="Doctor">Doctor</option>
                  <option value="Patient">Patient</option>
                  <option value="Admin">Admin</option>
                </select>
                <Error error={errors.role} />
                <button type="submit" className="btn btn-primary">
                  Continue
                </button>
                <p className="signup">
                  Don't have an account ? 
                  <a href="/signup" onClick={toggleForm}>
                     Sign Up.
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Forgot;
