import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Roles from './components/Roles';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Roles</h3>
      </Col>
    </Row>
    <Row>
      <Roles />
    </Row>
  </Container>
);

export default ExamplePage;
