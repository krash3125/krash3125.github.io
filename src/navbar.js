import { Navbar, NavItem, NavLink, Collapse, Nav } from 'reactstrap'
import './page.css'

const NavBar = () => {
  return (
      <Navbar color="dark" dark expand fixed="top" full >
        <Collapse navbar>
          <Nav className="mx-auto" navbar >
            <NavItem className="mx-2">
              <NavLink href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/">
                Projects
              </NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink href="/">
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default NavBar;
