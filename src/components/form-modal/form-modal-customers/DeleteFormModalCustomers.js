import React from "react";
import { useSelector } from "react-redux";
import { customersServices } from "../../../services/customersServices";
import Button from "../../button/Button";
import "../form-modal-invoices/FormModalInvoices.css";

const DeleteFormModalCustomers = () => {
  const { rowInfo } = useSelector((state) => state.customer);
  const { id } = rowInfo;

  const handleDeleteItem = async () => {
    await customersServices.deleteSingleCustomer(id);
  };
  return (
    <div className="form_modal_container">
      <form className="form_modal">
        <label className="delete_modal_label">Are you sure?</label>

        <div className="buttons-form">
          <Button
            type="button"
            buttonStyle="btn--primary"
            buttonColor="btn--red"
          >
            Discard
          </Button>
          <Button
            onClick={() => handleDeleteItem()}
            type="button"
            buttonStyle="btn--primary"
            buttonColor="btn--grey"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DeleteFormModalCustomers;
