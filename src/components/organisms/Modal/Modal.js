import React from 'react';
import { ModalWrapper } from 'components/organisms/Modal/Modal.styles';
import { Button } from 'components/atoms/Button/Button';

const Modal = ({ handleClose, children, isOpen }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleClose}>
      {children}
      <Button onClick={handleClose}>Close</Button>
    </ModalWrapper>
  );
};

export default Modal;
