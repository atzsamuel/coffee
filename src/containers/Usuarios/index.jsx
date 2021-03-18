import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ListUsuarios from './components/ListUsuarios';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Administracion de Usuarios</h3>
      </Col>
    </Row>
    <Row>
      <ListUsuarios />
    </Row>
  </Container>
);

export default ExamplePage;
