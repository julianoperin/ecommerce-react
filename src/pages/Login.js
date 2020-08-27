import React from "react";

// Strapi function

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

  let isEmpty = false;

  const toggleMember = () => {};
  const handleSubmit = async (e) => {};

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
      </form>
    </section>
  );
}
