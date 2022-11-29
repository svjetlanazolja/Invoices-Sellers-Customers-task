import CrudComponent from "../components/crud-component/CrudComponent";
// import AddFormModalInvoices from "../components/form-modal/form-modal-invoices/AddFormModalInvoices";

export const INVOICES = "/invoices/:id";

const HandleRouteId = () => {
  console.log("testing");

  return (
    <>
      <div>TESTING</div>
      {/* <AddFormModalInvoices />
      
       */}
      <CrudComponent route={"invoices"} open />
    </>
  );
};

export default HandleRouteId;
