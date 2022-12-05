import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { customersServices } from "../../../services/customersServices";
import Button from "../../button/Button";
import "../form-modal-invoices/FormModalInvoices.css";
import {
  changeActiveId,
  setReqState,
} from "../../../redux/slices/customers/customersSlices";
import { useNavigate } from "react-router-dom";

const DeleteFormModalCustomers = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const { rowInfo } = useSelector((state) => state.customers);
  const { id } = rowInfo;
  const navigate = useNavigate();

  const handleDeleteItem = async (id) => {
    await customersServices.deleteSingleCustomer(id);
    dispatch(changeActiveId(id));
    dispatch(setReqState());
    handleCloseModal();
    navigate("/customers");
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
            onClick={() => {
              handleCloseModal();
            }}
          >
            Discard
          </Button>
          <Button
            onClick={() => handleDeleteItem(id)}
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
