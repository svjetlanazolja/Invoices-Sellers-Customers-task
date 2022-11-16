import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import "./Modal.css";
import Backdrop from "./backdrop/Backdrop";

const dropIn = {
  hidden: {
    y: "-50vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, children }) => {
  return (
    <Backdrop
      onClick={() => {
        handleClose();
      }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
