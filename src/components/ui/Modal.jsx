import React, { useState } from "react";


const Modal = ({ children, isModalClosed, closeModal }) => {

  return (
    <div
      onClick={closeModal}
      className={`w-full h-screen fixed top-0 bg-black/50 py-16 transition-all delay-75 flex items-center flex-col justify-center ${
        isModalClosed && "opacity-0 invisible"
      }`}
    >
      <span onClick={(e) => e.stopPropagation()} className="h-full mx-auto flex items-center justify-center">{children}</span>
    </div>
  );
};

export default Modal;

export const useModal = () => {
  const [isModalClosed, setIsModalClosed] = useState(true);

  const closeModal = () => {
    setIsModalClosed(true);
  };

  const openModal = () => {
    setIsModalClosed(false);
  };

  return { isModalClosed, closeModal, openModal };
};