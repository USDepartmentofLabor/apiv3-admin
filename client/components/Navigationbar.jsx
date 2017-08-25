import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Nav, NavItem, Navbar, FormGroup, FormControl, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Navigationbar extends React.Component {
  handleSelect(eventKey) {
    event.preventDefault();
    alert("selected"+eventKey);
  }

  render() {
    return (
      <Navbar onSelect={this.handleSelect}>
        <Navbar.Header>
         <Navbar.Brand>
           <a href="/">DOL-OPADEC APIV3</a>
         </Navbar.Brand>
         <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Users</NavItem>
          <NavItem eventKey={2} href="#">ApiKeys</NavItem>
          <NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
           {' '}
          <Button type="submit">Submit</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>);
  }
}
