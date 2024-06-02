import { useState } from "react";

const useModalState = (initialState = false) => {
  const [show, setShow] = useState(initialState);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return { show, handleShow, handleClose };
};

export default useModalState;
