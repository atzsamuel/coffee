import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Productos from './components/Productos';
import './index.css';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Example Page One</h3>
      </Col>
    </Row>
    <Row>
      <Productos />
    </Row>
  </Container>
);

export default ExamplePage;
