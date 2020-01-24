import React, { useEffect } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import styled from 'styled-components';


import { FormWrapper, StyledForm } from '../common/elements';
import Input from '../common/Input';
import * as actions from '../../store/user/userActions';



import Heading from '../common/Heading';
import Button from '../common/Button';
import Message from '../common/Message';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: -1rem;
  /* border: solid red 3px; */
  
`;

const RecoverSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
});

const RecoverPassword = ({ error, loading, sendEmail, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={RecoverSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await sendEmail(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin size="h1" color="white">
            Recover your password
          </Heading>
          <Heading size="h4" bold color="white">
            Type in your e-mail to recover your password
          </Heading>
          <StyledForm>
            <Field
              type="email"
              name="email"
              placeholder="Type your email..."
              component={Input}
            />
            <Button style={{width:'40%', color:'white', backgroundColor:'black'}}
              disabled={!isValid || isSubmitting}
              loading={loading ? 'Sending recover email...' : null}
              type="submit"
            >
              Recover email
            </Button>
            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
            </MessageWrapper>
            <MessageWrapper>
              <Message success show={error === false}>
                Recover email sent successfully!
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.recoverPassword.loading,
  error: auth.recoverPassword.error,
});

const mapDispatchToProps = {
  sendEmail: actions.recoverPassword,
  cleanUp: actions.clean,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecoverPassword);