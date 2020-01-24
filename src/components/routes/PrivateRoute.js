import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({
  component: Component,
  token,
  errorStatusCode,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>{
     if (localStorage.getItem('lakhidatoken'))
        {
          return <Component {...props} />
        }
        else 
        {return <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />}
      }}
     />
  );
};

//FGE:Note you can also use a bool like isauthenticated state instead of localstorage check for a token
//state: { from: props.location } is to return you to the page you were trying to access befor authentication


const mapStateToProps = ({ token, errorStatusCode }) => ({
  errorStatusCode,
  token
});



export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(PrivateRoute)
);