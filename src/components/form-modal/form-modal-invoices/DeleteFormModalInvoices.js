import React from "react";
import Button from "../../button/Button";
import { useSelector } from "react-redux";
import "./FormModalInvoices.css";
import { invoiceServices } from "../../../services/invoicesServices";

const DeleteFormModalInvoices = () => {
  const { rowInfo } = useSelector((state) => state.invoices);
  const { id } = rowInfo;

  const handleDeleteItem = async () => {
    await invoiceServices.deleteSingleInvoice(id);
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

export default DeleteFormModalInvoices;
