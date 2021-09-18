import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavLink, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../redux/actions/userAction";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
    <Navbar style={{backgroundColor: '#3FB6BF'}}>
      <Container>
        
          <Navbar.Brand>User Management System</Navbar.Brand>
      
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {userInfo && (
    
                <LinkContainer to='/admin/userlist'>
                
                  <NavLink>Users</NavLink>
                </LinkContainer>

            )}
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username' style={{"left":"10px"}}>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item><center><b>Profile</b></center></NavDropdown.Item>
                </LinkContainer>
                {userInfo && (
              <NavDropdown.Item onClick={logoutHandler}>
              <center><b>Logout</b></center>
              </NavDropdown.Item>
            )}
              </NavDropdown>
            ) : (
              <LinkContainer to='/'>
                <Nav.Link>
                  <i className='fas fa-user'></i> LOGIN
                </Nav.Link>
              </LinkContainer>
            )}
            
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
  );
};

export default Header;
