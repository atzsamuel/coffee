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
    return x.firstName.toLowerCase().includes(text.toLowerCase()) || !text;
  };
}
export default class ListUsuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lsData: [
        {
          id: '1',
          firstName: 'Samuel',
          lastName: 'Atz',
          userName: 'satz',
          email: 'samuelatzmorales@gmail.com',
          status: '1',
        },
      ],
      dropdownOpen: false,
      modal: false,
      iestado: '1',
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
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
      firstName: type === 'm' ? data.firstName : '',
      lastName: type === 'm' ? data.lastName : '',
      userName: type === 'm' ? data.userName : '',
      email: type === 'm' ? data.email : '',
    });
  }

  render() {
    const {
      iestado, dropdownOpen, modal, firstName, lastName, userName, email, text, lsData,
    } = this.state;

    return (
      <Col md={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">Usuarios</h5>
              <h5 className="subhead">Usuarios de la aplicación</h5>
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
                    <th>Primer nombre</th>
                    <th>Apellidos</th>
                    <th>Usuario</th>
                    <th>Correo</th>
                    <th>Estado</th>
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
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.status === '1' ? 'Activo' : 'Inactivo'}</td>
                        <td>
                          <div>
                            <Button color="primary" className="rounded" size="sm" onClick={e => this.addUser(e, user, 'm')}>
                              Editar
                            </Button>
                          </div>
                        </td>
                        <td>
                          <div>
                            <Button color="danger" className="rounded" size="sm">
                              Eliminar
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
                    <Input id="idfirstName" name="firstName" type="text" placeholder="Primer nombre" value={firstName} />
                  </Col>
                  <Col lg={6}>
                    <Input id="idlastName" name="lastName" type="text" placeholder="Segundo nombre" value={lastName} />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col lg={6}>
                    <Input id="iduserName" name="userName" type="text" placeholder="Nombre de usuario" value={userName} />
                  </Col>
                  <Col lg={6}>
                    <Input id="idemail" name="email" type="email" placeholder="Correo" value={email} />
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
