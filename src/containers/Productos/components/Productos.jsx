import React, { useState } from 'react';
import {
  ButtonDropdown, Input, DropdownToggle, DropdownMenu, DropdownItem,
  Button, Table, ButtonGroup, ButtonToolbar,
} from 'reactstrap';
import ModalA from './ModalA';
// import ModalE from './ModalE';

function Productos() {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div>
      <div className="rectangle">
        <strong>Productos</strong>
        <hr />
        <tr>
          <th>
            <ButtonDropdown className="estado" isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                Estado
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem disabled>Estado</DropdownItem>
                <DropdownItem>Activo</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Inactivo</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </th>
          <th><Button className="boton" color="info">Buscar</Button>{' '}</th>
          <th><ModalA className="boton" /></th>
        </tr>
        <Input className="searchBox" placeholder="Buscar">Buscar</Input>
        <Table classname="infoProd">
          <thead>
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Categoria</th>
              <th>Estado</th>
              <th>Editar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td><ModalA className="btnForm" /></td>
              <td><Button className="btnForm" color="danger">Eliminar</Button>{' '}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td><ModalA className="btnForm" /></td>
              <td><Button className="btnForm" color="danger">Eliminar</Button>{' '}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td><ModalA className="btnForm" /></td>
              <td><Button className="btnForm" color="danger">Eliminar</Button>{' '}</td>
            </tr>
          </tbody>
        </Table>
        <ButtonToolbar className="barraBtns">
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    </div>
  );
}

export default Productos;
