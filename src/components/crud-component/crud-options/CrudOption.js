import React, { useEffect, useState } from "react";
import Modal from "../../modal/Modal";
import "./CrudOptions.css";
import AddFormModalInvoices from "../../form-modal/form-modal-invoices/AddFormModalInvoices";
import EditFormModalInvoices from "../../form-modal/form-modal-invoices/EditFormModalInvoices";
import DeleteFormModalInvoices from "../../form-modal/form-modal-invoices/DeleteFormModalInvoices";

import AddFormModalCustomers from "../../form-modal/form-modal-customers/AddFormModalCustomers";
import EditFormModalCustomers from "../../form-modal/form-modal-customers/EditFormModalCustomers";
import DeleteFormModalCustomers from "../../form-modal/form-modal-customers/DeleteFormModalCustomers";

import EditFormModalSellers from "../../form-modal/form-modal-sellers/EditFormModalSellers";
import AddFormModalSellers from "../../form-modal/form-modal-sellers/AddFormModalSellers";
import DeleteFormModalSellers from "../../form-modal/form-modal-sellers/DeleteFormModalSellers";

const CrudOption = ({ route, type, id, children }) => {
  const [isModalInView, setIsModalInView] = useState(false);
  const handleCloseModal = () => {
    setIsModalInView(false);
  };

  return (
    <div
      className="crud_options"
      onClick={() => {
        setIsModalInView(true);
      }}
    >
      {children}
      {isModalInView && (
        <Modal
          handleClose={() => {
            setIsModalInView(false);
          }}
        >
          {route === "invoices" && type === "add" && (
            <AddFormModalInvoices handleCloseModal={handleCloseModal} />
          )}
          {route === "invoices" && type === "update" && (
            <EditFormModalInvoices />
          )}
          {route === "invoices" && type === "delete" && (
            <DeleteFormModalInvoices />
          )}

          {route === "customers" && type === "add" && (
            <AddFormModalCustomers handleCloseModal={handleCloseModal} />
          )}
          {route === "customers" && type === "update" && (
            <EditFormModalCustomers />
          )}
          {route === "customers" && type === "delete" && (
            <DeleteFormModalCustomers />
          )}

          {route === "sellers" && type === "add" && (
            <AddFormModalSellers handleCloseModal={handleCloseModal} />
          )}
          {route === "sellers" && type === "update" && <EditFormModalSellers />}
          {route === "sellers" && type === "delete" && (
            <DeleteFormModalSellers />
          )}
        </Modal>
      )}
    </div>
  );
};

export default CrudOption;
