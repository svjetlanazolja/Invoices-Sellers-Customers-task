import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../button/Button";
import "./FormModalInvoices.css";
import { invoiceServices } from "../../../services/invoicesServices";

const EditFormModalInvoices = ({
  handleCloseInvoicesEditModal,
  setUpdateInvoicesRequestSent,
}) => {
  const { rowInfo } = useSelector((state) => state.invoices);
  const { sellerName, customerName, date, amount, id } = rowInfo;
  const [invoicesSellerName, setInvoicesSellerName] = useState(sellerName);
  const [invoicesCustomerName, setInvoicesCustomerName] =
    useState(customerName);
  const [invoicesDate, setInvoicesDate] = useState(date);
  const [invoicesAmount, setInvoicesAmount] = useState(amount);

  const handleUpdateSingleInvoice = async () => {
    await invoiceServices.updateSingleInvoice(id, {
      id,
      sellerName: invoicesSellerName,
      customerName: invoicesCustomerName,
      date: invoicesDate,
      amount: invoicesAmount,
    });
    console.log("updated invoices");
    setUpdateInvoicesRequestSent((prevState) => !prevState);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="form_modal_container">
      <h3>Edit an invoice</h3>
      <form className="form_modal">
        <label>Seller</label>
        <input
          onChange={(event) => setInvoicesSellerName(event.target.value)}
          value={invoicesSellerName}
          type="text"
          name="sellerName"
          required
        />

        <label>Customer</label>
        <input
          onChange={(event) => setInvoicesCustomerName(event.target.value)}
          value={invoicesCustomerName}
          type="text"
          name="customerName"
          required
        />

        <label>Date</label>
        <input
          onChange={(event) => setInvoicesDate(event.target.value)}
          value={invoicesDate}
          type="date"
          name="date"
          max={today}
          required
        />

        <label>Amount</label>
        <input
          onChange={(event) => setInvoicesAmount(event.target.value)}
          value={invoicesAmount}
          type="text"
          name="amount"
          required
        />

        <div className="buttons-form">
          <Button
            onClick={() => handleCloseInvoicesEditModal()}
            type="button"
            buttonStyle="btn--primary"
            buttonColor="btn--yellow"
          >
            Discard
          </Button>
          <Button
            onClick={() => {
              handleUpdateSingleInvoice();
              handleCloseInvoicesEditModal();
            }}
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

export default EditFormModalInvoices;
