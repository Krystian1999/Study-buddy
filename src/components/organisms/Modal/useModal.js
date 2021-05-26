import { useState } from 'react';

const useModal = (initialState = false) => {
  const [isOpen, setModalState] = useState(initialState);

  const handleCloseModal = () => setModalState(false);
  const handleOpenModal = () => setModalState(true);
  return {
    isOpen,
    handleCloseModal,
    handleOpenModal,
  };
};

export default useModal;
