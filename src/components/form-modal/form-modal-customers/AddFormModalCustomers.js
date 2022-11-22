import React, { useState } from "react";
import Button from "../../button/Button";
import "../form-modal-invoices/FormModalInvoices.css";
import { customersServices } from "../../../services/customersServices";
import { useNavigate } from "react-router-dom";
import { setReqState } from "../../../redux/slices/invoices/invoicesSlices";
import { useDispatch } from "react-redux";

const AddFormModalCustomers = ({ handleCloseModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newCustomer, setNewCustomer] = useState({
    id: "",
    name: "",
    surname: "",
    address: "",
    age: "",
  });

  const handleAddCustomers = async () => {
    await customersServices.AddSingleCustomer({
      id: Math.random() * 10000,
      name: newCustomer.name,
      surname: newCustomer.surname,
      address: newCustomer.address,
      age: newCustomer.age,
    });
    customersServices.getCustomers();
    setNewCustomer({ name: "", surname: "", address: "", age: "" });
    dispatch(setReqState());
    handleCloseModal();
    navigate("/customers");
    console.log(newCustomer);
  };

  return (
    <div className="form_modal_container">
      <h3>Add an customer</h3>
      <form className="form_modal">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={newCustomer.name}
          required
          onChange={(e) =>
            setNewCustomer({ ...newCustomer, name: e.target.value })
          }
        />

        <label>Surname</label>
        <input
          type="text"
          name="surname"
          required
          value={newCustomer.surname}
          onChange={(e) =>
            setNewCustomer({ ...newCustomer, surname: e.target.value })
          }
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={newCustomer.address}
          required
          onChange={(e) =>
            setNewCustomer({ ...newCustomer, address: e.target.value })
          }
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={newCustomer.age}
          required
          onChange={(e) =>
            setNewCustomer({ ...newCustomer, age: e.target.value })
          }
        />

        <div className="buttons-form">
          <Button
            type="button"
            buttonStyle="btn--primary"
            buttonColor="btn--yellow"
            onClick={() => handleAddCustomers()}
          >
            Discard
          </Button>
          <Button
            type="button"
            buttonStyle="btn--primary"
            buttonColor="btn--green"
            onClick={() => handleAddCustomers()}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddFormModalCustomers;
