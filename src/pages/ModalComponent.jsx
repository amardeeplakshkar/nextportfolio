
import React from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Update Modal"
    >
      <div>
        <p>It will update soon...</p>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
