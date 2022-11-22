import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CrudComponent from "../components/crud-component/CrudComponent";
import CustomersTable from "../components/customers-table/CustomersTable";
import PageHeader from "../components/page-header/PageHeader";
import { customersServices } from "../services/customersServices";
import { changeCustomers } from "../redux/slices/customers/customersSlices";
import { customersDataSelector } from "../redux/slices/customers/customersSelectors";

const Customers = () => {
  const customersData = useSelector(customersDataSelector);
  console.log(customersData);
  const dispatch = useDispatch();

  useEffect(() => {
    customersServices.getCustomers().then((res) => {
      dispatch(changeCustomers(res.data));
    });
  }, [dispatch]);

  return (
    <div>
      <PageHeader>CUSTOMERS</PageHeader>
      <CrudComponent route={"customers"} />
      <CustomersTable route={"customers"} />
    </div>
  );
};

export default Customers;
