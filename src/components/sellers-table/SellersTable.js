import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import EditFormModalSellers from "../form-modal/form-modal-sellers/EditFormModalSellers";
import { setRowInfo } from "../../redux/slices/sellers/sellersSlices";
import { useDispatch } from "react-redux";
import "../invoices-table/InvoicesTable.css";

const SellersTable = () => {
  const [sellersData, setSellerData] = useState([]);

  const [rowSelected, setRowSelected] = useState(false);
  const [updateSellerRequestSent, setUpdateSellerRequestSent] = useState(false);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [pageNumberLimit, setPageNumberLimit] = useState(1);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(1);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(sellersData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOffFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sellersData.slice(indexOffFirstItem, indexOfLastItem);

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
    sellersdata();
  }, []);

  useEffect(() => {
    sellersdata();
  }, [updateSellerRequestSent]);

  const backend_url = process.env.REACT_APP_BACKEND_URL;
  const route = "/sellers";

  const sellersdata = async () => {
    const { data } = await axios.get(backend_url + route);
    setSellerData(data);
  };

  const handleSelectRow = (rowData) => {
    dispatch(setRowInfo(rowData));
    setRowSelected((prevState) => !prevState);
    console.log(rowData);
  };

  const handleCloseSellerEditModal = () => {
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
        <EditFormModalSellers
          handleCloseSellerEditModal={handleCloseSellerEditModal}
          setUpdateSellerRequestSent={setUpdateSellerRequestSent}
        />
      )}
      <table className="table_data">
        <thead className="table_data_thead">
          <tr>
            <th>Company</th>
            <th>Address</th>
            <th>Active</th>
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
              <td>{item.companyName}</td>
              <td>{item.hqAddress}</td>
              <td>{item.isActive ? "active" : "inactive"}</td>
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

export default SellersTable;
