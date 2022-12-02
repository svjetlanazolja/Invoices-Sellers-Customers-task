import React, { useState } from "react";
import Button from "../../button/Button";
import "./FormModalInvoices.css";
import { invoiceServices } from "../../../services/invoicesServices";
import { useNavigate } from "react-router-dom";
import { setReqState } from "../../../redux/slices/invoices/invoicesSlices";
import { useDispatch } from "react-redux";

const AddFormModalInvoices = ({ handleCloseModal }) => {
  const today = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newInvoices, setNewInvoices] = useState({
    id: "",
    sellerName: "",
    customerName: "",
    date: "",
    amount: "",
  });

  const handleAddInvoices = async () => {
    await invoiceServices.AddSingleInvoice({
      id: Math.random() * 10000,
      sellerName: newInvoices.sellerName,
      customerName: newInvoices.customerName,
      date: newInvoices.date,
      amount: newInvoices.amount,
    });
    invoiceServices.getInvoices();
    setNewInvoices({ sellerName: "", customerName: "", date: "", amount: "" });
    dispatch(setReqState());
    handleCloseModal();
    navigate("/");
  };

  return (
    <div className="form_modal_container">
      <h3>Add an invoice</h3>
      <form className="form_modal">
        <label>Seller</label>
        <input
          type="text"
          name="sellerName"
          value={newInvoices.sellerName}
          required
          onChange={(e) =>
            setNewInvoices({ ...newInvoices, sellerName: e.target.value })
          }
        />
        <label>Customer</label>
        <input
          type="text"
          name="customerName"
          value={newInvoices.customerName}
          required
          onChange={(e) =>
            setNewInvoices({ ...newInvoices, customerName: e.target.value })
          }
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          max={today}
          value={newInvoices.date}
          required
          onChange={(e) =>
            setNewInvoices({ ...newInvoices, date: e.target.value })
          }
        />
        <div className="dollar_div">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            name="amount"
            value={newInvoices.amount}
            required
            id="dollar"
            onChange={(e) =>
              setNewInvoices({ ...newInvoices, amount: e.target.value })
            }
          />
        </div>
        <div className="buttons-form">
          <Button
            type="button"
            buttonStyle="btn--primary"
            buttonColor="btn--yellow"
            onClick={() => {
              handleCloseModal();
            }}
          >
            Discard
          </Button>
          <Button
            type="button"
            buttonStyle="btn--primary"
            buttonColor="btn--green"
            onClick={() => handleAddInvoices()}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddFormModalInvoices;
