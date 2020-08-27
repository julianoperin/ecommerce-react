import React from "react";

// Strapi function
import loginUser from "../strapi/loginUser";
import registerUser from "../strapi/registerUser";

//handle user
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  //setup user context

  //! state values
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUserName] = React.useState("default");
  const [isMember, setIsMember] = React.useState(true);

  let isEmpty = !email || !password || !username;

  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUserName("default") : setUserName("");
      return isMember;
    });
  };
  const handleSubmit = async (e) => {
    //! Alert
    e.preventDefault();
    let response;
    if (isMember) {
      // response = await loginUser
    } else {
      // response = await registerUser
    }
    if (response) {
      //
    } else {
      // show alert
    }
  };

  console.log(email);
  console.log(password);
  return (
    <section className="form section">
      <h2 className="section-title">{isMember ? "sign in" : "register"}</h2>
      <form className="login-form">
        {/* single input */}
        <div className="form-control">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* single input */}
        {/* single input */}
        <div className="form-control">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* single input */}
        {/* single input */}
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
        {/* single input */}
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
          <button type="button" onClick={handleSubmit}>
            click here
          </button>
        </p>
      </form>
    </section>
  );
}
