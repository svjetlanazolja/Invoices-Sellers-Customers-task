import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CrudComponent from "../components/crud-component/CrudComponent";
import PageHeader from "../components/page-header/PageHeader";
import { invoicesDataSelector } from "../redux/slices/customers/customersSelectors";
import { changeInvoices } from "../redux/slices/customers/customersSlices";
import { invoiceServices } from "../services/invoicesServices";

const Invoices = () => {
  const invoicesData = useSelector(invoicesDataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    invoiceServices.getInvoices().then((res) => {
      dispatch(changeInvoices(res.data));
    });
  }, [dispatch]);

  return (
    <div>
      <PageHeader>Invoices</PageHeader>

      <CrudComponent route={"invoices"} />
    </div>
  );
};

export default Invoices;
