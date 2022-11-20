import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./InvoicesTable.css";

const InvoicesTable = () => {
  const [invoicesData, setInvoicesData] = useState([]);

  const backend_url = process.env.REACT_APP_BACKEND_URL;
  const route = "/invoices";

  const invoicesdata = async () => {
    const { data } = await axios.get(backend_url + route);
    setInvoicesData(data);
  };
  useEffect(() => {
    invoicesdata();
  }, []);

  const [pageNumber, setPageNumber] = useState(0);

  const invoicesPerPage = 4;
  const pagesVisited = pageNumber * invoicesPerPage;
  const pageCount = Math.ceil(invoicesData.length / invoicesPerPage);

  const displayInvoices = invoicesData
    .slice(pagesVisited, pagesVisited + invoicesPerPage)
    .map((item) => {
      return (
        <tr
          onClick={console.log("TEST SELECT ROW ")}
          key={item.id}
          className="table_data_tr"
        >
          <td>{item.sellerName}</td>
          <td>{item.customerName}</td>
          <td>{item.date}</td>
          <td>{item.amount}</td>
        </tr>
      );
    });

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <table className="table_data">
        <thead className="table_data_thead">
          <tr>
            <th>Seller</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody className="table_data_body">{displayInvoices}</tbody>
      </table>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageRangeDisplayed={3}
        breakLabel="..."
        invoicesCount={pageCount}
        onInvoicesChange={changePage}
        containerClassName={"pagination_container"}
        previousLinkClassName={"previous_button"}
        nextLinkClassName={"next_button"}
        disabledClassName={"pagination_disabled"}
        activeClassName={"pagination_active"}
      />
    </>
  );
};

export default InvoicesTable;
