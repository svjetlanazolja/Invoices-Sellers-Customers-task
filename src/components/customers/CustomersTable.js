import React, { useEffect, useState } from "react";
import axios from "axios";

const CustomersTable = () => {
  const [customersData, setCustomersData] = useState([]);

  useEffect(() => {
    customerdata();
  }, []);

  const backend_url = process.env.REACT_APP_BACKEND_URL;
  const route = "/customers";

  const customerdata = async () => {
    const { data } = await axios.get(backend_url + route);
    setCustomersData(data);
  };

  return (
    <table className="table_data">
      <thead className="table_data_thead">
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Address</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody className="table_data_body">
        {customersData.map((item) => (
          <tr key={item.id} className="table_data_tr">
            <td>{item.name}</td>
            <td>{item.surname}</td>
            <td>{item.address}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomersTable;
