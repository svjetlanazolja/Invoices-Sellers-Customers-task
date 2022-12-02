import React from "react";
import Button from "../../button/Button";
import { useSelector } from "react-redux";
import { sellersServices } from "../../../services/sellersServices";
import "../form-modal-invoices/FormModalInvoices.css";

const DeleteFormModalSellers = ({ handleCloseModal }) => {
  const { rowInfo } = useSelector((state) => state.customers);
  const { id } = rowInfo;

  const handleDeleteItem = async () => {
    await sellersServices.deleteSingleSeller(id);
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

export default DeleteFormModalSellers;
