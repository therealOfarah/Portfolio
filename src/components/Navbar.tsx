import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import "../../src/images"
export function NavbarTop(){
  return(
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="me-right" href="#home">Portfolio</Navbar.Brand>
          {/* <img src='../images/logo_size.png' alt="" /> */}
          <Nav className="me-left">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}