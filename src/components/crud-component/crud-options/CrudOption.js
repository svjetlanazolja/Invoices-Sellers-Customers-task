import React, { useState } from "react";
import EditFormModalSellers from "../../form-modal/form-modal-sellers/AddFormModalSellers";
import EditFormModalCustomers from "../../form-modal/form-modal-customers/EditFormModalCustomers";
import EditFormModalInvoices from "../../form-modal/form-modal-invoices/EditFormModalInvoices";
import Modal from "../../modal/Modal";
import "./CrudOptions.css";
import AddFormModalInvoices from "../../form-modal/form-modal-invoices/AddFormModalInvoices";
import AddFormModalCustomers from "../../form-modal/form-modal-customers/AddFormModalCustomers";
import AddFormModalSellers from "../../form-modal/form-modal-sellers/AddFormModalSellers";

const CrudOption = ({ route, type, id, children }) => {
  const [isModalInView, setIsModalInView] = useState(false);

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
          {route === "invoices" && type === "add" && <AddFormModalInvoices />}
          {route === "invoices" && type === "update" && (
            <EditFormModalInvoices />

            //TODO: INVOICES UPDATE COMPONENT i dodati id toj komponenti da ucita podatak i da ga moze mjenjati
          )}
          {route === "invoices" && type === "delete" && (
            <div>INVOICES DELETE</div>
          )}

          {route === "customers" && type === "add" && <AddFormModalCustomers />}
          {route === "customers" && type === "update" && (
            <EditFormModalCustomers />
            //TODO: INVOICES UPDATE COMPONENT i dodati id toj komponenti da ucita podatak i da ga moze mjenjati
          )}
          {route === "customers" && type === "delete" && (
            <div>customers DELETE</div>
          )}

          {route === "sellers" && type === "add" && <AddFormModalSellers />}
          {route === "sellers" && type === "update" && (
            <EditFormModalSellers />
            //TODO: INVOICES UPDATE COMPONENT i dodati id toj komponenti da ucita podatak i da ga moze mjenjati
          )}
          {route === "sellers" && type === "delete" && (
            <div>INVOICES DELETE</div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default CrudOption;
