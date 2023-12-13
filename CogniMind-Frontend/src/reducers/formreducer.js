import generateAuthError from "../validators/auth.formvalidator";
import generateUploadError from "../validators/upload.formvalidator";

const formreducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      const [name, value] = action.data;
      const newstate = { ...state, [name]: value };

      return newstate;
    }
    case "CHECK_AUTH": {
      const [formstate, name] = action.data;
      const error = generateAuthError(formstate, name);
      const newstate = { ...state, [name]: error };

      return newstate;
    }
    case "CHECK_UPLOAD": {
      const [formstate, name] = action.data;
      const error = generateUploadError(formstate, name);
      const newstate = { ...state, [name]: error };

      return newstate;
    }
    default:
      return state;
  }
};

export default formreducer;
