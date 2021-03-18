import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Categorias from './components/Categorias';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Administrador de categorias</h3>
      </Col>
    </Row>
    <Row>
      <Categorias />
    </Row>
  </Container>
);

export default ExamplePage;
