import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Home from './Components/Home';

import { BookmarkPlus, Search, BorderWidth, Tiktok, Instagram, Twitter, Youtube, Facebook } from 'react-bootstrap-icons';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              width="60"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{' '}
            <span className="ms-3"><BorderWidth />{' '}Menu</span>
          </Navbar.Brand>
          <Navbar.Collapse id="navbarScroll" style={{display:'contents'}}>
            <Form className="d-flex">
              <InputGroup className="ms-3" style={{width:600}}>
                <Form.Control
                  placeholder="Search IMDb"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  <Search />
                </Button>
              </InputGroup>
            </Form>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" className="ms-3">
                <img
                  src="https://m.media-amazon.com/images/G/01/imdbpro/logos/IMDbPro-logo-primary-reversed._CB1513032401_.png"
                  width="80"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Nav.Link>
              <Nav.Link href="#action1">
                <BookmarkPlus /> Watchlist
              </Nav.Link>
              <Nav.Link href="#action1">
                Signin
              </Nav.Link>
              <NavDropdown title="EN" id="collasible-nav-dropdown" className="float-end">
                <NavDropdown.Item href="#action/3.1">EN</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Home />
      {/* condition */}

      <div className='bg-dark'>
        <Container>
          <Row className='p-3'>
            <Col md={{ span: 6, offset: 3 }}>
              <center>
                <Button variant="warning" className='btn position-relative'>Signin for more access</Button>
                <p className='mt-3'>
                  <a class="text-light" aria-current="page" href="#"><Tiktok /> {' '}</a>
                  <a class="text-light ms-3" aria-current="page" href="#"><Instagram /> {' '}</a>
                  <a class="text-light ms-3" aria-current="page" href="#"><Twitter /> {' '}</a>
                  <a class="text-light ms-3" aria-current="page" href="#"><Youtube /> {' '}</a>
                  <a class="text-light ms-3" aria-current="page" href="#"><Facebook /></a>
                </p>
                <p className='mt-3'>
                  <a class="text-light" aria-current="page" href="#">Get the IMDb App {' '}</a>
                  <a class="text-light ms-3" aria-current="page" href="#">Help {' '}</a>
                  <a class="text-light ms-3" aria-current="page" href="#">Site Index {' '}</a>
                  <a class="text-light ms-3" aria-current="page" href="#">IMDbPro {' '}</a>
                  <a class="text-light ms-3" aria-current="page" href="#">Box Office Mojo</a>
                  <a class="text-light ms-3" aria-current="page" href="#">IMDb Developer</a>
                  <a class="text-light ms-3" aria-current="page" href="#">Press Room</a>
                  <a class="text-light ms-3" aria-current="page" href="#">Advertising</a>
                  <a class="text-light ms-3" aria-current="page" href="#">Jobs</a>
                  <a class="text-light ms-3" aria-current="page" href="#">Conditions of Use</a>
                  <a class="text-light ms-3" aria-current="page" href="#">Privacy Policy</a>
                  <a class="text-light ms-3" aria-current="page" href="#">Your Ads Privacy Choices</a>
                </p>
                <p className='mt-3 text-muted'>© 1990-2023 by IMDb.com, Inc.</p>
              </center>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
