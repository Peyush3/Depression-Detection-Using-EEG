import "./auth.css";
import { useReducer } from "react";
import formreducer from "../../reducers/formreducer";
import Error from "../Error/Error";

const defaultState = {
  password: "",
};

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Rest of the form submission logic
};


const Reset = () => {
  const [formstate, dispatchState] = useReducer(formreducer, defaultState);
  const [errors, dispatchErrors] = useReducer(formreducer, defaultState);

  return (
    <div className="App">
      <section>
        <div className="container active">
          <div className="user signupBx">
            <div className="formBx">
              <form action="" onSubmit={handleSubmit}>
                <h2>Reset Password</h2>

                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
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
                <Error error={errors.password} />
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
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
                <Error error={errors.password} />
                <button type="submit" className="btn btn-primary">
                  Continue
                </button>
              </form>
            </div>
            <div className="imgBx">
              <img
                src="https://www.diagnosio.com/wp-content/uploads/2020/12/AI-bias.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reset;
