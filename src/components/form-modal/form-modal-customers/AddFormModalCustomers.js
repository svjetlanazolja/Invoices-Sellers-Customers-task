import React from "react";
import Button from "../../button/Button";
import "../form-modal-invoices/FormModalInvoices.css";

const AddFormModalCustomers = () => {
  return (
    <div className="form_modal_container">
      <h3>Add an customer</h3>
      <form className="form_modal">
        <label>Name</label>
        <input type="text" name="name" required />

        <label>Surname</label>
        <input type="text" name="surname" required />

        <label>Address</label>
        <input type="text" name="address" required />

        <label>Age</label>
        <input type="number" name="age" required />

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

export default AddFormModalCustomers;
