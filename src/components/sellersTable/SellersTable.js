import React, { useEffect, useState } from "react";
import axios from "axios";

const SellersTable = () => {
  const [sellersData, setSellerData] = useState([]);

  useEffect(() => {
    sellersdata();
  }, []);

  const backend_url = process.env.REACT_APP_BACKEND_URL;
  const route = "/sellers";

  const sellersdata = async () => {
    const { data } = await axios.get(backend_url + route);
    setSellerData(data);
  };

  return (
    <table className="table_data">
      <thead className="table_data_thead">
        <tr>
          <th>Company</th>
          <th>Address</th>
          <th>Active</th>
        </tr>
      </thead>

      <tbody className="table_data_body">
        {sellersData.map((item) => (
          <tr key={item.id} className="table_data_tr">
            <td>{item.companyName}</td>
            <td>{item.hqAddress}</td>
            <td>{item.isActive}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SellersTable;
