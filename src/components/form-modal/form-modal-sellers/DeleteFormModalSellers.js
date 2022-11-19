import React from "react";
import Button from "../../button/Button";
import "../form-modal-invoices/FormModalInvoices.css";

const DeleteFormModalSellers = () => {
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

export default DeleteFormModalSellers;
