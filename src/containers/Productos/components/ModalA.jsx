import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import Agregar from './Agregar';

const ModalA = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle} className="boton">Agregar</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Agregar</ModalHeader>
        <ModalBody>
          <Agregar />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalA;
