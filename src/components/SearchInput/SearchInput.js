import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Formik } from "formik";
import classes from "./SearchInput.module.css";

import { RE_CAPTCHA_KEY } from "../../utils/constants";

const SearchInput = ({ onSubmit }) => {
  const recapRef = useRef();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhone = (phone) => {
    return String(phone).match(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    );
  };

  const validatePlateNumber = (phone) => {
    return String(phone).match(/^[0-9]{2,3}.*.*[0-9]{2,3}$/);
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const recaptchaValue = recapRef.current.getValue();
    console.log("recaptchaValue", recaptchaValue);
    console.log("values", values);

    let type;
    if (validateEmail(values.searchValue)) {
      type = "email";
    } else if (validatePhone(values.searchValue)) {
      type = "phone";
    } else if (validatePlateNumber(values.searchValue)) {
      type = "car_plate";
      console.log(type);
    }
    if (type) {
      onSubmit(type, values.searchValue, recaptchaValue);
    }
    console.log();

    setSubmitting(false);
  };

  return (
    <div className={classes.container}>
      <Formik
        initialValues={{ searchValue: "" }}
        // validate={}
        onSubmit={handleSubmit}
      >
        {({
          dirty,
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form 
            onSubmit={handleSubmit}
            className={classes.form}>
            <span className={classes.logo}/>
            <div className={classes.inputDiv}>
              <input
                type="text"
                name="searchValue"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.searchValue}
                className={classes.input}
                //   placeholder="Input your mail, plate number or phone (International format)"
                // placeholder="Մուտքագրել էլ․ հասցե, մեքենայի համարանիշ կամ հեռախոսահամար"
              />
              {errors.searchValue && touched.searchValue && errors.searchValue}
                <button className={classes.vector}/>
              <ReCAPTCHA ref={recapRef} sitekey={RE_CAPTCHA_KEY} />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SearchInput;
