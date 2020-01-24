import React from "react";
import { Formik, Form as FForm, Field } from "formik";
import "./contactform-styles.scss";
import * as Yup from "yup";
import { connect } from "react-redux";
import customerContact  from '../../store/contact/contactActions'
import { FaUserCircle, FaAddressCard } from "react-icons/fa";
import { IconContext } from "react-icons";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";
import TextareaAutosize from 'react-textarea-autosize';


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email not valid")
    .required("Email is required"),
  name: Yup.string()
    .min(2, "Name must be 2 characters or longer")
    .required("Name is required"),
  company: Yup.string()
    .min(2, "Company must be 2 characters or longer")
    .required("company is required"),
  message: Yup.string()
    .min(20, "Message must be 20 characters or longer")
    .required("Company is required")
    .max(1000, "Number of characters too long" )
});

function ContactForm(props) {

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    await props.customerContact(values);
          props.history.push("/");
    if (props.error) setStatus(props.error);
    setSubmitting(false);
   
  };


  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        company: '',
        about: '',
        message: ''

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
                    <FaAddressCard />
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
                  {touched.name && errors.name && (
                    <p>{errors.name}</p>
                  )}
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  {touched.company && errors.company && (
                    <p>{errors.company}</p>
                  )}
                  <Field
                    type="text"
                    name="company"
                    placeholder="Your Company"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  {touched.about && errors.about && (
                    <p>{errors.about}</p>
                  )}
                  <Field
                    type="text"
                    name="about"
                    component="select"
                    placeholder="About Your Inqury"
                    className="form-control" >
                     <option value="">Select a value</option>
                     <option value="SharePoint">SharePoint</option>
                     <option value="Java">Java</option>
                     <option value=".Net">.Net</option>
                     <option value="Database Administration">Database Administration</option>
                     <option value="FullStack">FullStack</option>
                     <option value="Automation anywhere">Automation anywhere</option>
                     <option value="SealesForce">SealesForce</option>
                     <option value="MuleSoft">MuleSoft</option>
                   
                    </Field>
                                    
                </div>
                <div className="form-group">
                  {touched.message && errors.message && (
                    <p>{errors.message}</p>
                  )}
                  <TextareaAutosize
                    type="Textarea"
                    name="message"
                    placeholder="Your Message ..."
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
                    "Send Message"
                  )}
                </button>
              </FForm>
            </div>
          </div>


          <div className="col-lg-6">
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
                    <FaAddressCard />
                  </div>
                </IconContext.Provider>

                <div className="card">
                 <p>Address
                        5335 Duke St. 
                        Alexandria, VA 22304
                        USA
                  </p>

                 <p>Email address
                    Please connect with us at
                    info@lakhida.com</p>
                 
                </div>
                
              
              </FForm>
              <div>
                {this.contact}
              </div>
            </div>
          </div>


        
      )}
    </Formik>
  );
}

const mapStateToProps = ({ firebase, contact }) => ({
  firebase,
  contact,
  error: contact.error,
  loading: contact.loading,
 // isLoaded: firebase.contact.isLoaded
  
});

export default withRouter(connect(mapStateToProps, {customerContact})(ContactForm));
