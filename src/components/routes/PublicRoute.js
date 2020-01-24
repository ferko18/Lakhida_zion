
import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";


// restricted = false meaning public route
// restricted = true meaning restricted route
const PublicRoute = ({
  component: Component,
  token,
  errorStatusCode,
  restricted,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("lakhidatoken") && restricted) {
          return (
            <Redirect
              to={{
                pathname: "/dashboard"
              }}
            />
          );
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

//FGE:Note you can also use a bool like isauthenticated state instead of localstorage check for a token
//state: { from: props.location } is to return you to the page you were trying to access befor authentication

const mapStateToProps = ({ lakhidatoken, errorStatusCode }) => ({
  errorStatusCode,
  lakhidatoken
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(PublicRoute)
);
