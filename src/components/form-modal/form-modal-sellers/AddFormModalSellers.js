import React from "react";
import Button from "../../button/Button";
import "../form-modal-invoices/FormModalInvoices.css";

const AddFormModalSellers = () => {
  return (
    <div className="form_modal_container">
      <h3>Add an seller</h3>
      <form className="form_modal">
        <label>Company</label>
        <input type="text" name="companyName" required />

        <label>Address</label>
        <input type="text" name="hqAddress" required />

        <label>Active</label>
        <input type="text" name="isActive" required />

        <div className="buttons-form">
          <Button
            type="button"
            buttonStyle="btn--primary"
            buttonColor="btn--yellow"
          >
            Discard
          </Button>
          <Button
            type="button"
            buttonStyle="btn--primary"
            buttonColor="btn--green"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddFormModalSellers;
