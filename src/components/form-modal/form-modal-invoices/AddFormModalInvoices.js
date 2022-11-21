import React, { useState } from "react";
import Button from "../../button/Button";
import "./FormModalInvoices.css";
import { invoiceServices } from "../../../services/invoicesServices";

const AddFormModalInvoices = () => {
  const [newInvoices, setNewInvoices] = useState({
    sellerName: "",
    customerName: "",
    date: "",
    amount: "",
  });

  const handleAddInvoices = () => {
    setNewInvoices({ sellerName: "", customerName: "", date: "", amount: "" });
    console.log(newInvoices);
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
          type="text"
          name="date"
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
          <Button>Discard</Button>
          <Button onClick={handleAddInvoices}>Save</Button>
        </div>
      </form>
    </div>
  );
};

export default AddFormModalInvoices;

// *****************************

// import React, { useState } from "react";
// import Button from "../../button/Button";
// import "./FormModalInvoices.css";

// const AddFormModalInvoices = () => {
//   const [newInvoices, setNewInvoices] = useState({
//     sellerName: "",
//     CustomerName: "",
//     date: "",
//     amount: "",
//   });

//   const onInputChange = (e) => {
//     setNewInvoices({ ...newInvoices, [e.target.name]: e.target.value });
//   };

//   const { sellerName, customerName, date, amount } = newInvoices;

//   // const [sellerName, setSellerName] = useState("");
//   // const [customerName, setCustomerName] = useState("");
//   // const [date, setDate] = useState("");
//   // const [amount, setAmount] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     AddFormModalInvoices(sellerName, customerName, date, amount);
//   };

//   return (
//     <div className="form_modal_container">
//       <h3>Add an invoice</h3>
//       <form className="form_modal">
//         <label>Seller</label>
//         <input
//           type="text"
//           name="sellerName"
//           value={sellerName}
//           required
//           onChange={(e) => onInputChange(e)}
//         />

//         <label>Customer</label>
//         <input
//           type="text"
//           name="customerName"
//           value={customerName}
//           required
//           onChange={(e) => onInputChange(e)}
//         />

//         <label>Date</label>
//         <input
//           type="text"
//           name="date"
//           value={date}
//           required
//           onChange={(e) => onInputChange(e)}
//         />

//         <div className="dollar_div">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="1"
//             name="amount"
//             value={amount}
//             required
//             id="dollar"
//             onChange={(e) => onInputChange(e)}
//           />
//         </div>

//         <div className="buttons-form">
//           <Button
//             type="button"
//             buttonStyle="btn--primary"
//             buttonColor="btn--yellow"
//           >
//             Discard
//           </Button>
//           <Button
//             type="button"
//             buttonStyle="btn--primary"
//             buttonColor="btn--green"
//           >
//             Save
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddFormModalInvoices;
