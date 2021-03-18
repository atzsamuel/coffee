import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Col, Button, Card, CardBody,
  CardGroup,
  CardImg, CardTitle,
  CardText, CardSubtitle, Jumbotron, Row,
} from 'reactstrap';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import Foto4 from './DN/CAFE CARAMELO.jpg';
import Foto5 from './DN/CAFE EXPORTADO.jpg';
import Foto6 from './DN/CAFE TRADICIONAL.jpg';
import Foto7 from './DN/cafe-expreso.jpg';
import Foto8 from './DN/cafeamericano.jpg';
import Foto9 from './DN/CAPUCHINO.jpg';
import Foto10 from './DN/chimal1.png';
import Foto11 from './DN/zacapa1.png';
import Foto12 from './DN/gt.png';
import Foto13 from './DN/restcafe1.jpg';
import Foto14 from './DN/restcafe2.jpg';
import Foto15 from './DN/restcafe3.jpg';
import Foto16 from './DN/restcafe4.jpg';
import Foto17 from './DN/restcafe5.jpg';
import Foto18 from './DN/restcafe6.jpg';

const FinalUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Card>
      <Navbar color="light" light expand="md-4">
        <NavbarBrand href="/">CAFFE COLAB</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">INICIO</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">COMPRA</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                CATEGORIAS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <hr />
      <Carousel>
        <div>
          <img src={Foto13} alt="Slider img 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={Foto14} alt="Slider img 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Foto15} alt="Slider img 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <CardGroup>
        <Card>
          <CardBody>
            <CardImg top width="100%" src={Foto11} alt="Card image cap" />
            <CardTitle tag="h5" style={{ color: 'white' }}>IMAGEN 1</CardTitle>
            <CardText>LUGAR EN ZACAPA</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Foto10} alt="Card image cap" />
          <CardBody>
            <CardText>LUGAR EN CHIMALTENAGO</CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Foto12} alt="Card image cap" />
          <CardBody>
            <CardText>LUGAR EN GUATEMALA</CardText>
          </CardBody>
        </Card>
      </CardGroup>

      <hr />
      <Jumbotron>
        <h1 className="display-3">Bievenido, CAFE COLAB</h1>
        <p className="lead">Aquí encontraras variedad de Productos y variaciones de cafe</p>
        <hr className="my-2" />
        <p>Es un agrado para nostros el contar con varias clases que debes disfrutar,Ingresa y pruebalos</p>
        <p className="lead">
          <Card>
            <CardBody>
              <Row>
                <Col lg={1}>
                  <a href="/log_in">
                    <Button size="md" className="roundend" color="success">Login</Button>
                  </a>
                </Col>
                <Col lg={2}>
                  <a href="/categorias">
                    <Button size="md" color="danger">Categorias</Button>
                  </a>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </p>
      </Jumbotron>
      <hr />

      <Carousel>
        <div>
          <img src={Foto16} alt="Slider img 1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={Foto17} alt="Slider img 2" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={Foto18} alt="Slider img 3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>

      <CardGroup>
        <Card>
          <CardImg top width="100%" src={Foto7} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">CAFE EXPRESSO</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">EL MEJOR</CardSubtitle>
            <Button outline color="success" block>Comprar</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Foto8} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">CAFE AMERICANO</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">RICO</CardSubtitle>
            <Button outline color="success" block>Comprar</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Foto9} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">CAPUCHINO</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">AGRADABLE</CardSubtitle>
            <Button outline color="success" block>Comprar</Button>
          </CardBody>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <CardImg top width="100%" src={Foto6} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">CAFE TRADICIONAL</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">GUATEMALTECO</CardSubtitle>
            <Button outline color="success" block>Comprar</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Foto5} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">CAFE EXPORTADO</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">EXTRANJERO</CardSubtitle>
            <Button outline color="success" block>Comprar</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={Foto4} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">CAFE CARAMELO</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">DULCE</CardSubtitle>
            <Button outline color="success" block>Comprar</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </Card>
  );
};

export default FinalUser;
