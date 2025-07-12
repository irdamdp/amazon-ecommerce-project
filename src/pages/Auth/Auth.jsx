import React, { useState, useContext } from "react";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import classes from "./singup.module.css";
// Auth.jsx
import { ClipLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
// import { create } from "@mui/material/styles/createTransitions";

import { DataContext } from "../../components/Dataprovider/Dataprovider";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signin: false,
    signup: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);

  const navigate = useNavigate();

  // console.log(user);
  // console.log(error);
  const authhandeler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name);

    if (e.target.name === "signin") {
      setLoading({ ...loading, signin: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          dispatch({
            type: "SET_USER",
            user: userCredential.user,
          });
          setError("");
          setLoading({ ...loading, signin: false });
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          setLoading({ ...loading, signin: false });
          // ..
        });
    } else {
      setLoading({ ...loading, signup: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          dispatch({
            type: "SET_USER",
            user: userCredential.user,
          });
          setLoading({ ...loading, signup: false });
          setError("");
          navigate("/"); 
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          setLoading({ ...loading, signup: false });
        });
    }
  };
  
  

  return (
    <>
      <section className={classes.signup}>
        <Link className={classes.img_logo} to="/">
          <img
            src="https://cdn.pixabay.com/photo/2021/08/10/16/02/amazon-6536326_960_720.png"
            alt=""
          />
        </Link>

        <div className={classes.signincontainer}>
          <h1 className={classes.signinheading}>Sign In</h1>
          <form className={classes.signinform}>
            {/* <div className={classes.signinform__group}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div> */}
            <div className={classes.signinform__group}>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                required
              />
            </div>
            <div className={classes.signinform__group}>
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                required
              />
            </div>
            <button
              onClick={authhandeler}
              type="submit"
              name="signin"
              className={classes.signinbtn}
            >
              {loading.signin ? (
                <ClipLoader color="#000" size={15} />
              ) : (
                "Sign In"
              )}
            </button> 
          </form>
          <p className={classes.signintext}>
            By signing in, you agree to the AMAZON FACE CLONE Conditions of Use
            & Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
            <Link to="/auth/login" className={classes.signinlink}>
              <button
                onClick={authhandeler}
                type="submit"
                name="signup"
                className={classes.signup_btn}
              >
                {loading.signup ? (
                  <ClipLoader color="#000" size={15} />
                ) : (
                  "Create your Amazon Account"
                )}
              </button>
            </Link>
            {error && <small className={classes.error}>{error}</small>}
          </p>
        </div>

        {/* <div className={classes.signinimage}>
          <img
            src="https://images.unsplash.com/photo-1593642633279-26a8b0f2b3c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
            alt="Signup"
          />
        </div> */}
      </section>
    </>
  );
}

export default Auth;
