const generateUploadError = (formstate, name) => {
  let error = "";
  if (formstate[name] === "") {
    error = "This field is required";
    return error;
  }

  switch (name) {
    case "doctor_id":
      if (
        !formstate[name].match(
          /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
        )
      ) {
        error = "Invalid Doctor ID";
      }
      break;
    case "patient_id":
      if (
        !formstate[name].match(
          /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
        )
      ) {
        error = "Invalid Patient ID";
      }
      break;
    case "file":
      if (formstate[name].name.substr(-3) !== "csv") {
        error = "Invalid File type";
      }
      break;
    default:
      error = "Unexpected input";
      break;
  }
  return error;
};

export default generateUploadError;
