import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CrudComponent from "../components/crud-component/CrudComponent";
import InvoicesTable from "../components/invoices-table/InvoicesTable";
import PageHeader from "../components/page-header/PageHeader";
import { invoicesDataSelector } from "../redux/slices/invoices/invoicesSelectors";
import { changeInvoices } from "../redux/slices/invoices/invoicesSlices";
import { invoiceServices } from "../services/invoicesServices";

const Invoices = () => {
  const invoicesData = useSelector(invoicesDataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    invoiceServices.getInvoices().then((res) => {
      dispatch(changeInvoices(res.data));
    });
  }, []);

  return (
    <div>
      <PageHeader>INVOICES</PageHeader>
      <CrudComponent route={"invoices"} />
      <InvoicesTable route={"invoices"} />
    </div>
  );
};

export default Invoices;
