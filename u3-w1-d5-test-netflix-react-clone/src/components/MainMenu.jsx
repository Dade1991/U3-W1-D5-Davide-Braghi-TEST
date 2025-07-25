import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Dropdown from "react-bootstrap/Dropdown"

function MainMenu() {
  return (
    <Navbar bg="dark" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home" className="ms-1 text-light fw-bold">
          TV Shows
        </Navbar.Brand>
        <Dropdown>
          <Dropdown.Toggle
            variant="dark"
            id="dropdown-basic"
            className="dropDown"
          >
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <i className="bi bi-grid text-light ms-3"></i>
          </Navbar.Text>
          <Navbar.Text>
            <i className="bi bi-grid-3x3 text-light ms-3"></i>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainMenu
