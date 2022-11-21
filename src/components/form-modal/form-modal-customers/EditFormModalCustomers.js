import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../button/Button";
import "../form-modal-invoices/FormModalInvoices.css";
import { customersServices } from "../../../services/customersServices";

const EditFormModalCustomers = ({
  handleCloseCustomersEditModal,
  setUpdateCustomersRequestSent,
}) => {
  const { rowInfo } = useSelector((state) => state.customers);
  const { name, surname, address, age, id } = rowInfo;
  const [customersName, setCustomersName] = useState(name);
  const [customersSurname, setCustomersSurname] = useState(surname);
  const [customersAddress, setCustomersAddress] = useState(address);
  const [customersAge, setCustomersAge] = useState(age);

  const handleUpdateSingleCustomer = async () => {
    await customersServices.updateSingleService(id, {
      id,
      name: customersName,
      surname: customersSurname,
      address: customersAddress,
      age: customersAge,
    });
    console.log("update customers");
    setUpdateCustomersRequestSent((prevState) => !prevState);
  };

  return (
    <div className="form_modal_container">
      <h3>Edit an customer</h3>
      <form className="form_modal">
        <label>Name</label>
        <input
          onChange={(event) => setCustomersName(event.target.value)}
          value={customersName}
          type="text"
          name="name"
          required
        />

        <label>Surname</label>
        <input
          onChange={(event) => setCustomersSurname(event.target.value)}
          value={customersSurname}
          type="text"
          name="surname"
          required
        />

        <label>Address</label>
        <input
          onChange={(event) => setCustomersAddress(event.target.value)}
          value={customersAddress}
          type="text"
          name="address"
          required
        />

        <label>Age</label>
        <input
          onChange={(event) => setCustomersAge(event.target.value)}
          value={customersAge}
          type="number"
          name="age"
          required
        />

        <div className="buttons-form">
          <Button
            onClick={() => handleCloseCustomersEditModal()}
            type="button"
            buttonStyle="btn--primary"
            buttonColor="btn--yellow"
          >
            Discard
          </Button>
          <Button
            onClick={() => {
              handleUpdateSingleCustomer();
              handleCloseCustomersEditModal();
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

export default EditFormModalCustomers;
