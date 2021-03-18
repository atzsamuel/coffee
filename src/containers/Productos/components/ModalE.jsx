import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import Editar from './Editar';

const ModalE = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>Editar</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Editar</ModalHeader>
        <ModalBody>
          <Editar />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalE;
