import React from 'react';
import {
  Card, Col, Button, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';

const FinalUser = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Pantalla base para el user final</h5>
          <h5 className="subhead">Example subhead</h5>
        </div>
        <p>Your content here</p>
        <Col>
          <a href="/log_in">
            <Button size="md" className="roundend" color="success">Login</Button>
          </a>
        </Col>
        <Col>
          <a href="/categorias">
            <Button size="md" color="danger">Categorias</Button>
          </a>
        </Col>
        <Col>
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
            <CardText>
              Some quick example text to build on
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Col>
      </CardBody>
    </Card>
  </Col>
);

export default FinalUser;
