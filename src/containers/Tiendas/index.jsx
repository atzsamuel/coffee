import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Tiendas from './components/Tiendas';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Tienda</h3>
      </Col>
    </Row>
    <Row>
      <Tiendas />
    </Row>
  </Container>
);

export default ExamplePage;
