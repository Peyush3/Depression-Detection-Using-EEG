import "./error.css";

const Error = (props) => {
  const error = props.error;

  if (error === "") {
    return <></>;
  } else {
    return <small className="error-text mt-2">{error}</small>;
  }
};

export default Error;
