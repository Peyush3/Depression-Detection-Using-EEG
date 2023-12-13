const generateAuthError = (formstate, name) => {
  let error = "";
  if (formstate[name] === "") {
    error = `This field is required`;
    return error;
  }
  switch (name) {
    case "username":
      if (!formstate[name].match(/^[0-9a-z]+$/i)) {
        error = "username must be alphanumeric";
      }
      break;
    case "email":
      if (
        !formstate[name].match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        error = "invalid email address";
      }
      //   else{
      //       res = request.POST["url",{"email":formstate[name]}]
      //       if(res=="exist"){
      //           error = "Email already exist"
      //       }
      //   }
      break;
    case "password":
      if (formstate[name].length < 6) {
        error = "password must be atleast 6 characters";
      }
      break;
    default:
      break;
  }
  return error;
};

export default generateAuthError;
