import React from 'react';
import {
  Col, Container, Row,
} from 'reactstrap';
import FinalUser from './components/FinalUser';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <br />
        <h3 className="page-title">Nesho</h3>
      </Col>
    </Row>
    <Row>
      <FinalUser />
    </Row>
  </Container>
);

export default ExamplePage;
