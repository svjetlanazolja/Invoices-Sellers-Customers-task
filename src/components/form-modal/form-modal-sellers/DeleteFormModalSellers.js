import React from "react";
import Button from "../../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { sellersServices } from "../../../services/sellersServices";
import "../form-modal-invoices/FormModalInvoices.css";
import { useNavigate } from "react-router-dom";
import {
  changeActiveId,
  setReqState,
} from "../../../redux/slices/sellers/sellersSlices";

const DeleteFormModalSellers = ({ handleCloseModal }) => {
  const dispatch = useDispatch();
  const { rowInfo } = useSelector((state) => state.sellers);
  const { id } = rowInfo;
  const navigate = useNavigate();

  const handleDeleteItem = async (id) => {
    await sellersServices.deleteSingleSeller(id);
    dispatch(changeActiveId(id));
    dispatch(setReqState());
    handleCloseModal();
    navigate("/sellers");
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

export default DeleteFormModalSellers;
