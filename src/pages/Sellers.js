import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CrudComponent from "../components/crud-component/CrudComponent";
import PageHeader from "../components/page-header/PageHeader";
import SellersTable from "../components/sellers-table/SellersTable";
import { changeSellers } from "../redux/slices/sellers/sellersSlices";
import { sellersDataSelector } from "../redux/slices/sellers/sellersSelector";
import { sellersServices } from "../services/sellersServices";

const Sellers = () => {
  const sellersData = useSelector(sellersDataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    sellersServices.getSellers().then((res) => {
      dispatch(changeSellers(res.data));
    });
  }, [dispatch]);

  return (
    <div>
      <PageHeader>SELLERS</PageHeader>
      <CrudComponent route={"sellers"} />
      <SellersTable route={"sellers"} />
    </div>
  );
};

export default Sellers;
