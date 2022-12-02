import React, { useState } from "react";
import Button from "../../button/Button";
import "../form-modal-invoices/FormModalInvoices.css";
import { sellersServices } from "../../../services/sellersServices";
import { useNavigate } from "react-router-dom";
import { setReqState } from "../../../redux/slices/sellers/sellersSlices";
import { useDispatch } from "react-redux";

const AddFormModalSellers = ({ handleCloseModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newSeller, setNewSeller] = useState({
    id: "",
    companyName: "",
    hqAddress: "",
    isActive: "",
  });

  const handleAddSellers = async () => {
    await sellersServices.AddSingleSeller({
      id: Math.random() * 10000,
      companyName: newSeller.companyName,
      hqAddress: newSeller.hqAddress,
      isActive: newSeller.isActive,
    });
    sellersServices.getSellers();
    setNewSeller({ companyName: "", hqAddress: "", isActive: "" });
    dispatch(setReqState());
    handleCloseModal();
    navigate("/sellers");
  };

  return (
    <div className="form_modal_container">
      <h3>Add an seller</h3>
      <form className="form_modal">
        <label>Company</label>
        <input
          type="text"
          name="companyName"
          value={newSeller.companyName}
          onChange={(e) =>
            setNewSeller({ ...newSeller, companyName: e.target.value })
          }
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="hqAddress"
          value={newSeller.hqAddress}
          onChange={(e) =>
            setNewSeller({ ...newSeller, hqAddress: e.target.value })
          }
          required
        />

        <label>Active</label>
        <input
          type="text"
          name="isActive"
          value={newSeller.isActive}
          onChange={(e) =>
            setNewSeller({ ...newSeller, isActive: e.target.value })
          }
          required
        />

        <div className="buttons-form">
          <Button
            type="button"
            buttonStyle="btn--primary"
            buttonColor="btn--yellow"
            onClick={() => handleAddSellers()}
          >
            Discard
          </Button>
          <Button
            type="button"
            buttonStyle="btn--primary"
            buttonColor="btn--green"
            onClick={() => handleAddSellers()}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddFormModalSellers;
