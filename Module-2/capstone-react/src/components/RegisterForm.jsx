import { useState } from "react";
import { useNavigate } from "react-router-dom";

// image import
import Hero from "/src/assets/registration-form-hero.svg";

// css import
import "./RegisterForm.css";

export default function RegisterForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({
    name: null,
    username: null,
    email: null,
    mobile: null,
    checkbox: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleChangeCheckbox = (e) => {
    setFormValues({ ...formValues, checkbox: e.target.checked });
  };

  // for checking errors in sign-up
  const handleSignUp = () => {
    let isErrors = false;

    // checks errors in name
    if (formValues.name.trim().length === 0) {
      //trim func removes white-spaces from start and end of string
      setErrors((prev) => ({ ...prev, name: "Field is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        name: null,
      }));
    }

    // checks errors in user-name
    if (formValues.username.trim().length === 0) {
      //trim func removes white-spaces from start and end of string
      setErrors((prev) => ({ ...prev, username: "Field is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        username: null,
      }));
    }

    //checks errors in email
    if (formValues.email.trim().length === 0) {
      //trim func removes white-spaces from start and end of string
      setErrors((prev) => ({ ...prev, email: "Field is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        email: null,
      }));
    }

    // checks errors in mobile number
    if (formValues.mobile.trim().length === 0) {
      //trim func removes white-spaces from start and end of string
      setErrors((prev) => ({ ...prev, mobile: "Field is required" }));
      isErrors = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        mobile: null,
      }));
    }

    // checks if checkbox is ticked
    if (formValues.checkbox === false) {
      //trim func removes white-spaces from start and end of string
      setErrors((prev) => ({
        ...prev,
        checkbox: "Check this box if you want to proceed",
      }));
      isErrors = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        checkbox: null,
      }));
    }

    if (!isErrors) {
      navigate("/movies");
    }
  };

  return (
    <>
      <div className="container-reg-from">
        {/* LEFT CONTAINER */}
        <div className="left-container">
          <img src={Hero} alt="Hero Image" />
          <h1>
            Discover new things on <br /> Superapp
          </h1>
        </div>

        {/* RIGHT CONTAINER */}
        <div className="right-container">
          <div className="form-elements">
            <h1>Super app</h1>
            <p className="p1">Create your new account</p>
            <input
              type="text"
              placeholder="Name"
              value={formValues.name}
              onChange={handleChange}
              name="name"
            />
            {errors.name ? (
              <p style={{ color: "red" }}>{errors.name}</p>
            ) : (
              <></>
            )}
            <input
              type="text"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
              name="username"
            />
            {errors.username ? (
              <p style={{ color: "red" }}>{errors.username}</p>
            ) : (
              <></>
            )}
            <input
              type="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              name="email"
            />
            {errors.email ? (
              <p style={{ color: "red" }}>{errors.email}</p>
            ) : (
              <></>
            )}
            <input
              type="text"
              placeholder="Mobile"
              value={formValues.mobile}
              onChange={handleChange}
              name="mobile"
            />
            {errors.mobile ? (
              <p style={{ color: "red" }}>{errors.mobile}</p>
            ) : (
              <></>
            )}
            <div className="input-checkbox">
              <div className="box-label">
                <input
                  type="checkbox"
                  id="checkbox"
                  name="Checkbox"
                  value={formValues.checkbox}
                  onChange={handleChangeCheckbox}
                />
                <label htmlFor="checkbox">
                  Share my registration data with Superapp.
                </label>
              </div>
              {errors.checkbox ? (
                <p style={{ color: "red" }}>{errors.checkbox}</p>
              ) : (
                <></>
              )}
            </div>
            <button onClick={handleSignUp}>SIGN UP</button>
            <p className="p2">
              By clicking on Sign up. you agree to Superapp
              <a href="#"> Terms and Conditions of Use</a>
            </p>
            <p className="p3">
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <a href="#"> Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
