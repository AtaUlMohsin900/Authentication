import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./mix.css";

const Register = () => {
  const [passShow, setPassShow] = useState(false);
  const [cpassShow, setCPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const setVal = (e) => {
    // console.log(k.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addUserData = (e) => {
    e.preventDefault();
    const { fname, email, password, cpassword } = inpval;

    if (fname === "") {
      alert("please enter your name");
    } else if (email === "") {
      alert("please enter your email");
    } else if (!email.includes("@")) {
      alert("enter valid email");
    } else if (password === "") {
      alert("enter your password");
    } else if (password.length < 8) {
      alert("password must be 8 charcters");
    } else if (cpassword === "") {
      alert("enter your confirm password");
    } else if (cpassword.length < 8) {
      alert("confirm password must be 8 charcters");
    } else if (password !== cpassword) {
      alert("password and confirm password not match");
    } else {
      console.log("user input successfully done");
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Sign Up</h1>
            <p style={{ textAlign: "center" }}>
              We are glad that you will be using Project Cloud to manage <br />
              your tasks! We hope that you will get like it. .
            </p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={setVal}
                value={inpval.email}
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>

            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={setVal}
                value={inpval.email}
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
            </div>

            <div className="form_input">
              <label htmlFor="email">Password</label>
              <div className="two">
                <input
                  type={!passShow ? "password" : "text"}
                  onChange={setVal}
                  value={inpval.password}
                  name="password"
                  id="password"
                  placeholder="Enter Your Password Address"
                />
                <div
                  className="showpass"
                  onClick={() => setPassShow(!passShow)}
                >
                  {!passShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <div className="form_input">
              <label htmlFor="email">Confirm Password</label>
              <div className="two">
                <input
                  type={!cpassShow ? "password" : "text"}
                  onChange={setVal}
                  value={inpval.cpassword}
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm Password "
                />

                <div
                  className="showpass"
                  onClick={() => setCPassShow(!passShow)}
                >
                  {!cpassShow ? "Show" : "Hide"}
                </div>
              </div>
            </div>

            <button className="btn" onClick={addUserData}>
              Sign Up
            </button>

            <p>
              Already have an account ? <NavLink to="/">Log In</NavLink>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
