import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { FormWrapper } from '../common/elements';
import Heading from '../common/Heading';
import Button from '../common/Button';
import Message from '../common/Message';

import * as actions from '../../store/user/userActions';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: -2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  
`;

const VerifyEmail = ({ sendVerification, error, loading }) => {
 

  return (
    <FormWrapper>
      <Wrapper>
        <Heading noMargin color="white" size="h1">
          Verify your email
        </Heading>
        <Heading color="white" bold size="h4">
          Go to your email inbox, and please verify your email.
        </Heading>
        <Button
          loading={loading ? 'Sending email...' : null}
          disabled={loading}
          onClick={() => sendVerification()}
        >
          Re-send verification email
        </Button>
        <MessageWrapper>
          <Message error show={error}>
            {error}
          </Message>
        </MessageWrapper>
        <MessageWrapper>
          <Message success show={error === false}>
            Message sent successfully!
          </Message>
        </MessageWrapper>
      </Wrapper>
    </FormWrapper>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error,
});

const mapDispatchToProps = {
  sendVerification: actions.verifyEmail,
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerifyEmail);