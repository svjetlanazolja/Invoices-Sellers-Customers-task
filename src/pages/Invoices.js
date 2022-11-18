import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CrudComponent from "../components/crud-component/CrudComponent";
import InvoicesTable from "../components/invoicesTable/InvoicesTable";
import PageHeader from "../components/page-header/PageHeader";
import { invoicesDataSelector } from "../redux/slices/invoices/invoicesSelectors";
import { changeInvoices } from "../redux/slices/invoices/invoicesSlices";
import { invoiceServices } from "../services/invoicesServices";

const Invoices = () => {
  const invoicesData = useSelector(invoicesDataSelector);
  console.log("ovo renderovati", invoicesData);
  const dispatch = useDispatch();

  useEffect(() => {
    invoiceServices.getInvoices().then((res) => {
      dispatch(changeInvoices(res.data));
    });
  }, [dispatch]);

  //
  return (
    <div>
      <PageHeader>INVOICES</PageHeader>
      <CrudComponent route={"invoices"} />
      <InvoicesTable route={"invoices"} />
    </div>
  );
};

export default Invoices;