import React, { useState } from 'react';
import {
  ButtonDropdown, Input, DropdownToggle, DropdownMenu,
  DropdownItem, Label, Button,
} from 'reactstrap';

function Editar() {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  const [dropdownOpen1, setOpen1] = useState(false);

  const toggle1 = () => setOpen1(!dropdownOpen1);
  return (
    <div>
      <div className="rectangleAdd">
        <strong>Editar Producto</strong>
        <hr />
        <br />
        <div className="divInputs">
          <Label>Nombre</Label>
          <Input className="inputAddProd" placeholder="Nombre">Nombre</Input>
          <Label>Descripcion</Label>
          <Input className="inputAddProd" placeholder="Descripcion">Descripcion</Input>
          <Label>Costo</Label>
          <Input className="inputAddProd" placeholder="Costo">Costo</Input>
          <Label>Precio Venta</Label>
          <Input className="inputAddProd" placeholder="Precio Venta">Precio Venta</Input>
        </div>
        <div className="addCategoria1">
          <Label>Categoria</Label>
          <br />
          <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle>
            Categoria
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>1. Platos Fuertes</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>2. Entradas</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>3. Bebidas sin alcohol</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>4. Bebidas con alcohol</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>5. Postres</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
        <div className="addCategoria2">
          <Label>Estado</Label>
          <br />
          <ButtonDropdown isOpen={dropdownOpen1} toggle={toggle1}>
            <DropdownToggle>
            Estado
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Activo</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Inactivo</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
        <div className="btnsAdd">
          <Button color="primary">Guardar</Button>{' '}
          <Button color="secondary">Cancelar</Button>{' '}
        </div>
        <div className="imagen">
          <Label>Imagen</Label>
          <img src="icon.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Editar;
