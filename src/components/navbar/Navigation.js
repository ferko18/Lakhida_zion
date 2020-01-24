import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./navigation-style.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { connect } from "react-redux";
import { signOut } from "../../store/user/userActions";

import { NavLink as RRNavLink } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { IconContext } from "react-icons";




export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      navbarbackgroundcolor: "transparent"
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  listenScrollEvent = e => {
    if (window.scrollY > 10) {
      this.setState({ navbarbackgroundcolor: "#333333" });
    } else {
      this.setState({ navbarbackgroundcolor: "transparent" });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
    //console.log(this.props)
  }

  render() {
    //console.log(this.props.firebase)
    const firstname = this.props.firebase.profile.firstname;
    //console.log(this.props)
    //const capsFirstname= firstname.toUpperCase();

    return (
      <Navbar
        style={{ backgroundColor: this.state.navbarbackgroundcolor }}
        dark
        expand="md"
      >
        <NavbarBrand exact tag={RRNavLink} to="/">
          <p>LAKHIDA TECH</p>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <div className="navdivider">
              <NavItem>
                <NavLink exact tag={RRNavLink} to="/" activeClassName="active">
                  HOME
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  SERVICES
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    tag={RRNavLink}
                    to="/services"
                    activeClassName="active"
                  >
                    SERVICES
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    tag={RRNavLink}
                    to="/services"
                    activeClassName="active"
                  >
                    Sharepoint Development
                  </DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to="/services"
                    activeClassName="active"
                  >
                    Sharepoint Admin
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    tag={RRNavLink}
                    to="/services"
                    activeClassName="active"
                  >
                    Java Backend Development
                  </DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to="/services"
                    activeClassName="active"
                  >
                    Java Full Stack Development
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem
                    tag={RRNavLink}
                    to="/services"
                    activeClassName="active"
                  >
                    React/Redux Development
                  </DropdownItem>
                  <DropdownItem
                    tag={RRNavLink}
                    to="/services"
                    activeClassName="active"
                  >
                    Full Stack Node Development
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink tag={RRNavLink} to="/contact" activeClassName="active">
                  CONTACT
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={RRNavLink} to="/Project" activeClassName="active">
                PROJECTS
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={RRNavLink} to="/ProjectDashboard" activeClassName="active">
                DASHBOARD
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={RRNavLink} to="/Blog" activeClassName="active">
                BLOG
                </NavLink>
              </NavItem>
              
            </div>
            <div className="navdivider">
            <NavItem>
                <NavLink tag={RRNavLink} to="/aboutus" activeClassName="active">
                  ABOUT US
                </NavLink>
              </NavItem>
              <NavItem>
                {this.props.firebase.auth.isEmpty ? (
                  <NavLink tag={RRNavLink} to="/login" activeClassName="active">
                    SIGN IN
                  </NavLink>
                ) : (
                  <NavLink
                    tag={RRNavLink}
                    exact
                    to="/"
                    style={{ cursor: "pointer" }}
                    onClick={this.props.signOut}
                  >
                    SIGN OUT
                  </NavLink>
                )}
              </NavItem>
              <NavItem>
                {!this.props.firebase.auth.isEmpty && this.props.emailVerified ? (
                  <NavLink
                    tag={RRNavLink}
                    to="/profile"
                    activeClassName="active"
                  >
                    <IconContext.Provider
                      value={{
                        style: {
                          verticalAlign: "middle",
                          color: "#0A807C",
                          fontSize: "35"
                        }
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <div>
                          <MdAccountCircle />
                        </div>
                        <span className='profileDisplayName'
                          style={{
                            color: "#09E6DE",
                            textTransform: "upperCase",
                            marginLeft: "5px"
                          }}
                        >
                          {firstname}
                        </span>
                      </div>
                    </IconContext.Provider>
                  </NavLink>
                ) : (
                  <NavLink
                    tag={RRNavLink}
                    to="/signup"
                    activeClassName="active"
                  >
                    {!this.props.firebase.auth.isEmpty? null: 'SIGN UP'}
                  </NavLink>
                )}
              </NavItem>
            </div>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
const mapStateToProps = ({ firebase }) => ({
  firebase, emailVerified: firebase.auth.emailVerified
});

export default withRouter(connect(mapStateToProps, { signOut })(Navigation));
