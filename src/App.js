import React from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Loginpage";
import About from "./pages/about/About";
import Navigation from "./components/navbar/Navigation";
import Servicepage from "./pages/servicespage/Servicepage";
import Signup from "./pages/signup/signuppage";
import Errorpage from "./pages/errorpage/Errorpage";
import Contact from "./pages/contact/contact";
import Footercontainer from "./components/footer/Footercontainer";
import PublicRoute from "./components/routes/PublicRoute";
import ScrollTop from "./utils/Scrolltop";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import VerifyEmail from "./components/loginform/VerifyEmail";
import RecoverPassword from './components/loginform/RecoverPassword'
import createProject from "./pages/project/projectpage";
import projectDashboard from './pages/project/projectDashboard'
import ProjectDetails from './components/project/projectDetails'
import Blog from './pages/blog/blogpage'

//  import createHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();
//const history = createHistory();
//this app need refactor
export { history };

function App({ loggedIn, emailVerified }) {
let routes;
if(loggedIn && !emailVerified){
  routes=(<Switch>
    <Route exact path="/verifyemail" component={VerifyEmail}></Route>
    <Route component={Errorpage} />
  </Switch>)

 
} else  {
    routes=(<Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/aboutus" component={About} />
      <Route exact path="/services" component={Servicepage} />
      <PublicRoute
        restricted={true}
        exact
        path="/login"
        component={Login}
      />
      <PublicRoute
        restricted={true}
        exact
        path="/signup"
        component={Signup}
      />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/project" component={createProject} />
      <Route exact path="/recover" component={RecoverPassword} />
      <Route exact path='/projectDashboard'component={projectDashboard} />
      <Route path='/project/:id' component={ProjectDetails} />
      <Route path="/blog" component={Blog} />

      <Route component={Errorpage} />
    </Switch>)
  }
  
  
 

  return (
    <Router history={history}>
      <ScrollTop />{" "}
      <div className="App">
        <Navigation />
        {/* {loggedIn && !emailVerified ? (
          <Switch>
            <Route exact path="/verifyemail" component={VerifyEmail}></Route>
          </Switch>
        ) : (
          <>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/aboutus" component={About} />
              <Route exact path="/services" component={Servicepage} />
              <PublicRoute
                restricted={true}
                exact
                path="/login"
                component={Login}
              />
              <PublicRoute
                restricted={true}
                exact
                path="/signup"
                component={Signup}
              />
              <Route exact path="/contact" component={Contact} />
              <Route component={Errorpage} />
            </Switch>
          </>
        )} */}
            {routes}
        <Footercontainer />
      </div>
    </Router>
  );
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified
});

export default connect(mapStateToProps)(App);
