import React from 'react';
import {
  Card, CardBody, Col, Button,
} from 'reactstrap';

const Productos = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Pagina base para las categorias</h5>
          <h5 className="subhead">Aqui vera las categorias el user final</h5>
        </div>
        <p>Your content here</p>
        <a href="/">
          <Button color="success">Home</Button>
        </a>
      </CardBody>
    </Card>
  </Col>
);

export default Productos;
