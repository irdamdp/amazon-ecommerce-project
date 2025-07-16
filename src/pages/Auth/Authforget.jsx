import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Utility/firebase";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import Auth from "./Auth";
import classes from "./singup.module.css"; // Assuming you have a CSS module for styling

const Authforget = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email);
      console.log(auth);
      setMessage("Password reset email sent! Check your inbox.");
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <section style={{ marginTop: "50px" }} className={classes.signup}>
        <div style={{ padding: "2rem" }} className={classes.signincontainer}>
          <h2 className={classes.signinheading}>Forgot Password</h2>
          <form onSubmit={handleSubmit} className={classes.signinform}>
            <div className={classes.signinform__group}>
              <label htmlFor="email"> Email</label>
              <input
                type="email"
                placeholder="Enter your registered email"
                value={email}
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <button type="submit" className={classes.signinbtn}>
              {loading ? (
                <ClipLoader color="#000" size={15} />
              ) : (
                " Send Reset Email"
              )}
            </button>
          </form>
          {message && <p>{message}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Link to="/auth" className={classes.forget_password}>
            ← Back to Sign In
          </Link>
        </div>
      </section>
    </>
  );
};

export default Authforget;
