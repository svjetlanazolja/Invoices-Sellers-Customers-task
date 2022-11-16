import React, { useState } from "react";
import Modal from "../../modal/Modal";
import "./CrudOptions.css";

const CrudOption = ({ route, type, id }) => {
  const [isModalInView, setIsModalInView] = useState(false);

  return (
    <div
      className="crud_options"
      onClick={() => {
        setIsModalInView(true);
      }}
    >
      {isModalInView && (
        <Modal
          handleClose={() => {
            setIsModalInView(false);
          }}
        >
          {route === "invoices" && type === "add" && (
            <div
              style={{ width: "200px", height: "200px", background: "white" }}
            >
              INVOICES ADD
            </div>
          )}
          {route === "invoices" && type === "update" && (
            //TODO: INVOICES UPDATE COMPONENT i dodati id toj komponenti da ucita podatak i da ga moze mjenjati
            <div
              style={{ width: "200px", height: "200px", background: "white" }}
            >
              INVOICES UPDATE
            </div>
          )}
          {route === "invoices" && type === "delete" && (
            <div
              style={{ width: "200px", height: "200px", background: "white" }}
            >
              INVOICES DELETE
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default CrudOption;
