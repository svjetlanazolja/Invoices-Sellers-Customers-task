import axios from "axios";
import React, { useEffect, useState } from "react";
import "./InvoicesTable.css";

const InvoicesTable = () => {
  const [invoicesData, setInvoicesData] = useState([]);

  useEffect(() => {
    invoicesdata();
  }, []);

  const backend_url = process.env.REACT_APP_BACKEND_URL;
  const route = "/invoices";

  const invoicesdata = async () => {
    const { data } = await axios.get(backend_url + route);
    setInvoicesData(data);
  };

  return (
    <table className="table_data">
      <thead className="table_data_thead">
        <tr>
          <th>Seller</th>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody className="table_data_body">
        {invoicesData.map((item) => (
          <tr key={item.id} className="table_data_tr">
            <td>{item.sellerName}</td>
            <td>{item.customerName}</td>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoicesTable;
