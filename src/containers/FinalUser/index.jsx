import React from 'react';
import {
  Container, Row, Card,
} from 'reactstrap';
import FinalUser from './components/FinalUser';

const ExamplePage = () => (
  <Card style={{ background: 'linear-gradient(to right, #2193b0, #6dd5ed)' }}>
    <Container className="dashboard">
      <Row>
        <FinalUser />
      </Row>
    </Container>
  </Card>
);

export default ExamplePage;
