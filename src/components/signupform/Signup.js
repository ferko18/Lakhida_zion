import React from "react";
import { Formik, Form as FForm, Field } from "formik";
import * as Yup from "yup";
import "./signup-styles.scss";
import { connect } from "react-redux";
import { signUp } from "../../store/user/userActions";
import { withRouter } from "react-router-dom";


const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "First Name Too Short!")
    .max(50, "First Name Too Long!")
    .required("First Name Required"),
  lastname: Yup.string()
    .min(2, "Last Name Too Short!")
    .max(50, "Last Name Too Long!")
    .required("Last Name Required"),
  email: Yup.string()
    .email("Email not valid")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters or longer")
    .required("Password is required"),
  passwordconfirm: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    )
  })
});

function SignUpForm(props) {
  const handleSubmit=()=>async (values, {setSubmitting, setStatus})=>{
await props.signUp(values)
console.log(values)
if(props.error){
  setStatus(props.error.message);
      setSubmitting(false);
}
else{
  props.history.push('/verifyemail')
}
  }
  return (
    <Formik
    initialValues={{
      email:  "",
      password: "",
      passwordconfirm: "",
      firstname:  "",
      lastname:   ""
    }}
    validationSchema={validationSchema}
    onSubmit={handleSubmit()}
    >
      {({ values, errors, touched, isSubmitting }) => (
        <div className="signupformcontainer">
          <div className="row">
            <div className="col-lg-12">
              <FForm
                className="bg-light scale-in-center"
                style={{ borderRadius: "5%" }}
              >
                <div className="form-group">
                  {touched.firstname && errors.firstname && (
                    <p>{errors.firstname}</p>
                  )}
                  <Field
                    type="text"
                    name="firstname"
                    placeholder="First Name*"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  {touched.lastname && errors.lastname && (
                    <p>{errors.lastname}</p>
                  )}
                  <Field
                    type="text"
                    name="lastname"
                    placeholder="Last Name*"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  {touched.email && errors.email && <p>{errors.email}</p>}
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email*"
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
                    placeholder="Password*"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  {touched.passwordconfirm && errors.passwordconfirm && (
                    <p>{errors.passwordconfirm}</p>
                  )}
                  <Field
                    type="password"
                    name="passwordconfirm"
                    placeholder="Confirm Password*"
                    className="form-control"
                  />
                </div>

                <button
                  className="btn btn-info btn-block"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </FForm>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
}

const mapStateToProps = ({ auth }) => ({
    error: auth.error,
});

export default withRouter(connect(mapStateToProps, {signUp})(SignUpForm));
