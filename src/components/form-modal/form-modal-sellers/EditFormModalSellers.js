import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../button/Button";
import "../form-modal-invoices/FormModalInvoices.css";
import { sellersServices } from "../../../services/sellersServices";

const EditFormModalSellers = ({
  handleCloseSellerEditModal,
  setUpdateSellerRequestSent,
}) => {
  const { rowInfo } = useSelector((state) => state.sellers);
  const { companyName, hqAddress, isActive, id } = rowInfo;
  const [sellerCompanyName, setSellerCompanyName] = useState(companyName);
  const [sellerHqAddress, setSellerHqAddress] = useState(hqAddress);
  const [sellerIsActive, setIsActive] = useState(isActive);

  const handleUpdateSingleSeller = async () => {
    await sellersServices.updateSingleSeller(id, {
      id,
      companyName: sellerCompanyName,
      hqAddress: sellerHqAddress,
      isActive: sellerIsActive,
    });
    console.log("updated seller");
    setUpdateSellerRequestSent((prevState) => !prevState);
  };

  return (
    <div className="form_modal_container">
      <h3>Edit an seller</h3>
      <form className="form_modal">
        <label>Company</label>
        <input
          onChange={(event) => setSellerCompanyName(event.target.value)}
          type="text"
          value={sellerCompanyName}
          name="companyName"
          required
        />

        <label>Address</label>
        <input
          onChange={(event) => setSellerHqAddress(event.target.value)}
          type="text"
          value={sellerHqAddress}
          name="hqAddress"
          required
        />

        <label>Active</label>
        <input
          onChange={(event) => setIsActive(event.target.value)}
          type="text"
          value={sellerIsActive}
          name="isActive"
          required
        />

        <div className="buttons-form">
          <Button
            onClick={() => handleCloseSellerEditModal()}
            type="button"
            buttonStyle="btn--primary"
            buttonColor="btn--yellow"
          >
            Discard
          </Button>
          <Button
            onClick={() => {
              handleUpdateSingleSeller();
              handleCloseSellerEditModal();
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
export default EditFormModalSellers;
