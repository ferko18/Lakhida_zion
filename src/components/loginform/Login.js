import "./login-styles.scss";
import React from "react";
import { Formik, Form as FForm, Field } from "formik";
import * as Yup from "yup";
import { FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
// import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import { signIn } from "../../store/user/userActions";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Loader from "react-loader-spinner";
//import { history } from "../../App";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email not valid")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters or longer")
    .required("Password is required")
});

function LoginForm(props) {
  if (
    props.firebase.auth.uid &&
    props.firebase.auth.emailVerified &&
    !props.loading
  )
    props.history.push("/profile");

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    await props.signIn(values);
    if (props.error) setStatus(props.error);
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, isSubmitting, status }) => (
        <div className="loginformcontainer">
          <div className="row">
            <div className="col-lg-12">
              <FForm
                className="bg-light scale-in-center"
                style={{ borderRadius: "5%" }}
              >
                <IconContext.Provider
                  value={{
                    color: "#0a807c",
                    className: "global-class-name",
                    size: "4rem"
                  }}
                >
                  <div className="loginusericon">
                    <FaUserCircle />
                  </div>
                </IconContext.Provider>
                <div className="form-group">
                  {touched.email && errors.email && <p>{errors.email}</p>}
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  {touched.password && errors.password && (
                    <p>{errors.password}</p>
                  )}
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                {/* {console.log(
                  props.firebase.auth.uid,
                  props.firebase.auth.emailVerified,
                  props.loading,
                  props.history.location.pathname
                )} */}
                {status && (
                  <div
                    style={{ width: "280px", textAlign: "center" }}
                    className="text-danger"
                  >
                    <p>{status}</p>
                  </div>
                )}
                <div>
                  {" "}
                  <Link to="/recover"> Forget Password?</Link>{" "}
                </div>

                <button
                  className="btn btn-info btn-block"
                  type={"submit"}
                  disabled={isSubmitting}
                >
                  {props.loading ? (
                    <Loader
                      type="ThreeDots"
                      color="white"
                      height={10}
                      width={10}
                    ></Loader>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </FForm>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

const mapStateToProps = ({ firebase, auth }) => ({
  firebase,
  error: auth.error,
  loading: auth.loading,
  isLoaded: firebase.auth.isLoaded
  //emailVerified: firebase.auth.emailVerified
});

export default withRouter(connect(mapStateToProps, { signIn })(LoginForm));
