import React from "react";
import Button from "../../button/Button";
import "./FormModalInvoices.css";

const AddFormModalInvoices = () => {
  return (
    <div className="form_modal_container">
      <h3>Add an invoice</h3>
      <form className="form_modal">
        <label>Seller</label>
        <input type="text" name="sellerName" required />

        <label>Customer</label>
        <input type="text" name="customerName" required />

        <label>Date</label>
        <input type="text" name="date" required />

        <div className="dollar_div">
          <label>Amount</label>
          <input type="number" min="1" name="amount" required id="dollar" />
        </div>

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

export default AddFormModalInvoices;
