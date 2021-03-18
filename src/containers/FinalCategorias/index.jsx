import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import FinalCategorias from './components/FinalCategorias';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Example Page One</h3>
      </Col>
    </Row>
    <Row>
      <FinalCategorias />
    </Row>
  </Container>
);

export default ExamplePage;
