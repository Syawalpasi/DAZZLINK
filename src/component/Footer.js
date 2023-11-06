import { Navbar, Container } from "react-bootstrap"
const Footer =  () =>{
    return(
        <Navbar  bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SMK Al-Islam</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login" className="text-decoration-none">Copyright Allright2022</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Footer;