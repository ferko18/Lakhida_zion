import React, { Component} from "react";
import { Formik, Form as FForm, Field } from "formik";
// import "./project-styles.scss";
import * as Yup from "yup";
import { connect } from "react-redux";
 import {createProject}  from '../../store/project/projectActions'
import { FaUserCircle, FaAddressCard } from "react-icons/fa";
import { IconContext } from "react-icons";
import Loader from "react-loader-spinner";
import { withRouter } from "react-router-dom";
import TextareaAutosize from 'react-textarea-autosize';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import NumberFormat from 'react-number-format';
import Basic from '../common/fileUpload';




const validationSchema = Yup.object().shape({
  projectname: Yup.string()
    .min(3, "Project Name must be 3 characters or longer")
    .required("Project Name is required"),
  projectId: Yup.string()
    .min(4, "ProjectId must be 4 characters or longer")
    .required("ProjectId is required"),
  company: Yup.string()
    .min(2, "Company must be 2 characters or longer")
    .required("company is required"),
  projectdescription: Yup.string()
    .min(20, "Project Description must be 20 characters or longer")
    // .required("Project Description is required")
    .max(1000, "Number of characters too long" )
});




function CreateProject (props) {

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    await props.createProject(values);
        console.log(props.createProject(values))
          props.history.push("/");
    if (props.error) setStatus(props.error);
    setSubmitting(false);
   
  };
  return (
    <Formik
      initialValues={{
        projectname: "",
        projectId: Date.now(),
        company: '',
        projectdescription: '',
        projecttype: '',
        deliverydate:'',
        buget: '',
        file: ''

      }}
      deliverydate={{ startDate: new Date() }}
   

      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, isSubmitting, status,setFieldValue }) => (
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
                <h4>Create a Project</h4>
                <div className="form-group">
                  {touched.projectname && errors.projectname && <p>{errors.projectname}</p>}
                  <Field
                    type="text"
                    name="projectname"
                    placeholder="Project Name"
                    className="form-control"
                  />
                </div>
                {/* <div className="form-group">
                  {touched.projectId && errors.projectId && (
                    <p>{errors.projectId}</p>
                  )}
                  <Field
                    type="text"
                    name="projectId"
                    placeholder="Project ID"
                    className="form-control"
                  />
                </div> */}
                <div className="form-group">
                  {touched.company && errors.company && (
                    <p>{errors.company}</p>
                  )}
                  <Field
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  {touched.projectdescription && errors.projectdescription && (
                    <p>{errors.projectdescription}</p>
                  )}
                  <TextareaAutosize
                    type="text"
                    name="projectdescription"
                    placeholder="Project description, business case, and technical approach"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  {touched.projecttype && errors.projecttype && (
                    <p>{errors.projecttype}</p>
                  )}
                  <Field
                    type="text"
                    name="projecttype"
                    component="select"
                    placeholder="projecttype"
                    className="form-control" >
                     <option value="">Select a value</option>
                     <option value="One-time project">One-time project</option>
                     <option value="Ongoing project">Ongoing project</option>
                     <option value="Complex project">Complex project</option>
                   
                    </Field>
                                    
                </div>

                <div className="form-group">
                  {touched.deliverydate && errors.deliverydate && (
                    <p>{errors.deliverydate}</p>
                  )}
                  <DatePicker 
                      selected={values.startDate}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                      name="startDate"
                      placeholder='dd.mm.yyyy'
                      onChange={date => setFieldValue('startDate', date)}
                  />
                </div>

                <div className="form-group">
                  {touched.buget && errors.buget && (
                    <p>{errors.buget}</p>
                  )}
                  <NumberFormat  
                      thousandSeparator={true} prefix={'$'}
                      className="form-control"   
                  />
                </div>

                <div className="container">
                  <Basic />
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
                    "Create Project"
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



const mapStateToProps = ({ firebase, project }) => ({
  firebase,
  project,
  error: project.error,
  loading: project.loading,
 // isLoaded: firebase.contact.isLoaded
 
  
});

export default withRouter(connect(mapStateToProps, {createProject})(CreateProject));
