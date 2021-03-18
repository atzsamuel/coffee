import React, { Component } from 'react';
import {
  Card, CardBody, Col, Row, Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, ButtonToolbar,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Table,
} from 'reactstrap';
// import Formdata from './Formdata';
/* eslint new-cap: ["error", { "newIsCap": false }] */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["toggleAddUser", "toggle"] }] */

function searchingFor(text) {
  return function search(x) {
    return x.nombre.toLowerCase().includes(text.toLowerCase()) || !text;
  };
}
export default class Tiendas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lsData: [
        {
          nombre: 'Tienda Chimaltenango',
          descripcion: 'Venta de tipo tipo de platillos especializado en postres',
          ubicacion: 'Guatemala,Chimaltenango',
          administrador: 'Jose Perez',
        },
        {
          nombre: 'Tienda Guatemala',
          descripcion: 'Venta de tipo tipo de platillos especializado en bebidas alcoholicas',
          ubicacion: 'Guatemala',
          administrador: 'Jose',
        },
      ],
      dropdownOpen: false,
      modal: false,
      iestado: '1',
      nombre: '',
      descripcion: '',
      ubicacion: '',
      administrador: '',
      text: '',
    };
    this.toggle = this.toggle.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  onChange2 = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggle(e) {
    e.preventDefault();
    const { dropdownOpen } = this.state;
    this.setState({ dropdownOpen: !dropdownOpen });
  }

  addUser(e, data, type) {
    e.preventDefault();
    const { modal } = this.state;
    this.setState({
      modal: !modal,
      nombre: type === 'm' ? data.nombre : '',
      descripcion: type === 'm' ? data.descripcion : '',
      ubicacion: type === 'm' ? data.ubicacion : '',
      administrador: type === 'm' ? data.administrador : '',
    });
  }

  render() {
    const {
      iestado, dropdownOpen, modal, nombre, descripcion, ubicacion, text, lsData, administrador,
    } = this.state;

    return (
      <Col md={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Tienda</h5>
              <h5 className="subhead">Administrador de tiendas</h5>
            </div>
            <Row>
              <Col lg={3} md={6} sm={6}>
                <Dropdown className="rounded" isOpen={dropdownOpen} toggle={e => this.toggle(e)}>
                  <DropdownToggle caret>
                    {iestado === '1' ? 'Activos' : 'Inactivos'}
                  </DropdownToggle>
                  <DropdownMenu className="rounded" container="body">
                    <DropdownItem name="iestado" value="1" onClick={e => this.onChange2(e)}>Activos</DropdownItem>
                    <DropdownItem name="iestado" value="0" onClick={e => this.onChange2(e)}>Inactivos</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <Button color="primary" className="rounded">Buscar</Button>
              </Col>
              <Col lg={3} md={6} sm={6}>
                <Button color="primary" className="rounded" onClick={e => this.addUser(e, [], 'i')}>Nuevo</Button>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <Input id="idtext" name="text" value={text} onChange={e => this.onChange2(e)} placeholder="Buscar..." />
              </Col>
            </Row>
            <br />
            <Row>
              <Table className="table--bordered table--head-accent" responsive hover>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Ubicacion</th>
                    <th>Administrador</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                  </tr>
                </thead>
                <tbody>
                  {lsData.filter(searchingFor(text)).map((user) => {
                    if (Object.entries(lsData).length === 0) {
                      return (
                        <div key={1}>
                          <span>n/a</span>
                        </div>
                      );
                    }
                    return (
                      <tr key={user.id}>
                        <td>{user.nombre}</td>
                        <td>{user.descripcion}</td>
                        <td>{user.ubicacion}</td>
                        <td>{user.administrador}</td>
                        <td>
                          <div>
                            <Button color="primary" className="rounded" size="sm" onClick={e => this.addUser(e, user, 'm')}>
                              Editar
                            </Button>
                          </div>
                        </td>
                        <td>
                          <div>
                            <Button color="danger" className="rounded" size="sm" onClick={e => this.addUser(e, user, 'm')}>
                              Editar
                            </Button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Row>
            <Modal isOpen={modal} className="modal-dialog modal-dialog-centered modal-lg">
              <ModalHeader>Usuario</ModalHeader>
              <ModalBody>
                <Row>
                  <Col lg={6}>
                    <Input id="idnombre" name="nombre" type="text" placeholder="Tienda" value={nombre} />
                  </Col>
                  <Col lg={6}>
                    <Input id="iddescripcion" name="descripcion" type="text" placeholder="Descripcion" value={descripcion} />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg={6}>
                    <Input id="idubicacion" name="ubicacion" type="text" placeholder="Ubicacion" value={ubicacion} />
                  </Col>
                  <Col lg={6}>
                    <Input id="idadministrador" name="administrador" placeholder="Administrador" value={administrador} />
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <ButtonToolbar className="modal__footer">
                  <Button className="rounded" color="danger" size="sm" onClick={e => this.addUser(e)}>Cancel</Button>
                  <Button color="primary" className="rounded" size="sm" type="submit">Guardar</Button>
                </ButtonToolbar>
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
