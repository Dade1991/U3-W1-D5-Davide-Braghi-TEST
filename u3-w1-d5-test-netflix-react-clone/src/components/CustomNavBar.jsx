import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function CustomNavBar() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="">
        <Container className="container">
          <Navbar.Brand href="#home">
            <div className="d-flex flex-row ">
              <img src="asset/logo.png" className="netflix-Logo" alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="">
            <Nav className="me-auto">
              <div className="d-flex flex-row ">
                <div className="d-flex flex-row just">
                  <Nav.Link href="#" className="fw-bold me-2">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#" className="fw-bold me-2">
                    TV Shows
                  </Nav.Link>
                  <Nav.Link href="#" className="fw-bold me-2">
                    Movies
                  </Nav.Link>
                  <Nav.Link href="#" className="fw-bold me-2">
                    Recently Added
                  </Nav.Link>
                  <Nav.Link href="#" className="fw-bold me-2">
                    My List
                  </Nav.Link>
                </div>
                <div className="d-flex flex-row">
                  <Nav.Link href="#" className="fw-bold ms-2">
                    <i className="bi bi-search"></i>
                  </Nav.Link>
                  <Nav.Link href="#" className="fw-bold ms-2">
                    KIDS
                  </Nav.Link>
                  <Nav.Link href="#" className="fw-bold ms-2">
                    <i className="bi bi-bell"></i>
                  </Nav.Link>
                  <Nav.Link href="#" className="fw-bold ms-2">
                    <i className="bi bi-person-circle"></i>
                  </Nav.Link>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavBar
