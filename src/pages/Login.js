import React from "react";

// Strapi function
import loginUser from "../strapi/loginUser";
import registerUser from "../strapi/registerUser";

//handle user
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user";

function Login() {
  const history = useHistory();

  //setup user context
  const { userLogin, showAlert, alert } = React.useContext(UserContext);
  //! state values
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUserName] = React.useState("default");
  const [isMember, setIsMember] = React.useState(true);

  let isEmpty = !email || !password || !username || alert.show;

  //TOGGLE MEMBER
  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUserName("default") : setUserName("");
      return isMember;
    });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    // Alert
    showAlert({
      msg: "accessing user data. Please wait!",
    });
    e.preventDefault();
    let response;
    if (isMember) {
      response = await loginUser({ email, password });
    } else {
      response = await registerUser({ email, password, username });
    }
    if (response) {
      const {
        jwt: token,
        user: { username },
      } = response.data;
      const newUser = { token, username };
      userLogin(newUser);
      showAlert({
        msg: `You are logged in: ${username}. Enjoy our products!`,
      });
      history.push("/products");
    } else {
      showAlert({
        msg: "There was an error. Please try again...",
        type: "danger",
      });
      // show alert
    }
  };

  console.log(email);
  console.log(password);
  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "sign in" : "register"}</h2>
      <form className="login-form">
        {/* EMAIL */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* END OF EMAIL */}

        {/* PASSWORD */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* END OF PASSWORD */}

        {/* USERNAME */}
        {!isMember && (
          <div className="form-control">
            <label htmlFor="username">username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        )}
        {/* END OF USERNAME */}

        {/* Empty form text */}
        {isEmpty && (
          <p className="form-empty">please fill out all form fields</p>
        )}
        {/* submit btn */}
        {!isEmpty && (
          <button
            type="submit"
            className="btn btn-block btn-primary"
            onClick={handleSubmit}
          >
            submit
          </button>
        )}
        {/* Register Link */}
        <p className="register-link">
          {isMember ? "need to register" : "already a member"}
          <button type="button" onClick={toggleMember}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
}

export default Login;
