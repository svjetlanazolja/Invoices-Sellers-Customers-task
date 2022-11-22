import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import EditFormModalInvoices from "../form-modal/form-modal-invoices/EditFormModalInvoices";
import { setRowInfo } from "../../redux/slices/invoices/invoicesSlices";
import { useDispatch, useSelector } from "react-redux";
import "./InvoicesTable.css";
import { useNavigate } from "react-router-dom";

const InvoicesTable = () => {
  const [invoicesData, setInvoicesData] = useState([]);
  const navigate = useNavigate();

  const [rowSelected, setRowSelected] = useState(false);
  const [updateInvoicesRequestSent, setUpdateInvoicesRequestSent] =
    useState(false);
  const dispatch = useDispatch();
  const reqSent = useSelector((state) => state.invoices.reqSent);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [pageNumberLimit, setPageNumberLimit] = useState(1);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(1);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(invoicesData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOffFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = invoicesData.slice(indexOffFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    }
  });
  useEffect(() => {
    invoicesdata();
  }, []);

  useEffect(() => {
    invoicesdata();
  }, [updateInvoicesRequestSent, reqSent]);

  const backend_url = process.env.REACT_APP_BACKEND_URL;
  const route = "/invoices";

  const invoicesdata = async () => {
    const { data } = await axios.get(backend_url + route);
    setInvoicesData(data);
  };

  const handleSelectRow = (rowData) => {
    dispatch(setRowInfo(rowData));
    setRowSelected((prevState) => !prevState);
    console.log(rowData);
  };

  const handleCloseInvoicesEditModal = () => {
    setRowSelected((prevState) => !prevState);
  };

  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  return (
    <>
      {rowSelected && (
        <EditFormModalInvoices
          handleCloseInvoicesEditModal={handleCloseInvoicesEditModal}
          setUpdateInvoicesRequestSent={setUpdateInvoicesRequestSent}
        />
      )}
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
          {currentItems.map((item) => (
            <tr
              key={item.id}
              id={item.id}
              onClick={() => handleSelectRow(item)}
              className="table_data_tr"
            >
              <td>{item.sellerName}</td>
              <td>{item.customerName}</td>
              <td>{item.date}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="pagination_container">
        <li className="pagination_icon">
          <button onClick={handlePrevButton}>
            <GrFormPrevious style={{ fontSize: "20px" }} />
          </button>
        </li>
        {renderPageNumbers}
        <li className="pagination_icon">
          <button onClick={handleNextButton}>
            <MdNavigateNext style={{ fontSize: "20px" }} />
          </button>
        </li>
      </ul>
    </>
  );
};

export default InvoicesTable;
