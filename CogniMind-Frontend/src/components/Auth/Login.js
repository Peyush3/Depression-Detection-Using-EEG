import "./auth.css";
import { useReducer } from "react";
import formreducer from "../../reducers/formreducer";
import Error from "../Error/Error";

const defaultState = {
  role: "",
  username: "",
  password: "",
};



function Login() {
  const [formstate, dispatchState] = useReducer(formreducer, defaultState);
  const [errors, dispatchErrors] = useReducer(formreducer, defaultState);

  const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch('http://127.0.0.1:8000/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formstate), // Sending the form data to the backend
    });

    if (response.ok) {
      // Handle successful login response (maybe set tokens, etc.)
      console.log('Login successful!');
    } else {
      // Handle login error
      console.log('Login failed.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
  };
  
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
                <h2>Sign In</h2>
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
                      type: "CHECK_AUTH",
                      data: [formstate, e.target.name],
                    });
                  }}
                />
                <Error error={errors.username} />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={(e) =>
                    dispatchState({
                      type: "UPDATE",
                      data: [e.target.name, e.target.value],
                    })
                  }
                  onBlur={(e) => {
                    dispatchErrors({
                      type: "CHECK_AUTH",
                      data: [formstate, e.target.name],
                    });
                  }}
                />
                <Error error={errors.password} />

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
                      type: "CHECK_AUTH",
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
                  Log In
                </button>
                <p className="signup">
                  <a href="/forgot">Forgot Password?</a>
                </p>
                <p className="signup">
                  Don't have an account ?<a href="/signup"> Sign Up.</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
