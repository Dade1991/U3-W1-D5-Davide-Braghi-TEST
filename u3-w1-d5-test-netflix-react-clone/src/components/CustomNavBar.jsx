import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function CustomNavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="" alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavBar
