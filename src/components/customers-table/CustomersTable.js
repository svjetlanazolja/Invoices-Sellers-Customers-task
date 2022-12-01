import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import EditFormModalCustomers from "../form-modal/form-modal-customers/EditFormModalCustomers";
import { useDispatch, useSelector } from "react-redux";
import {
  setRowInfo,
  changeActiveId,
  changeCustomers,
} from "../../redux/slices/customers/customersSlices";
import { customersActiveIdSelector } from "../../redux/slices/customers/customersSelectors";

const CustomersTable = () => {
  const [customersData, setCustomersData] = useState([]);

  const [rowSelected, setRowSelected] = useState(false);
  const [updateCustomersRequestSent, setUpdateCustomersRequestSent] =
    useState(false);
  const dispatch = useDispatch();
  const reqSent = useSelector((state) => state.customers.reqSent);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [pageNumberLimit, setPageNumberLimit] = useState(1);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(1);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const activeId = useSelector(customersActiveIdSelector);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(customersData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOffFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customersData.slice(indexOffFirstItem, indexOfLastItem);

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
    customerdata();
  }, []);

  useEffect(() => {
    customerdata();
  }, [updateCustomersRequestSent, reqSent]);

  const backend_url = process.env.REACT_APP_BACKEND_URL;
  const route = "/customers";

  const customerdata = async () => {
    const { data } = await axios.get(backend_url + route);
    setCustomersData(data);
  };

  const handleSelectRow = (rowData, i) => {
    dispatch(setRowInfo(rowData));
    dispatch(changeActiveId(i));
    setRowSelected((prevState) => !prevState);
    console.log(rowData);
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
          {currentItems.map((item, i) => {
            return (
              <tr
                key={item.id}
                id={item.id}
                onClick={() => handleSelectRow(item, i)}
                className="table_data_tr"
                style={{
                  background: i === activeId ? "#edf3ff" : "white",
                }}
              >
                <td>{item.name}</td>
                <td>{item.surname}</td>
                <td>{item.address}</td>
                <td>{item.age}</td>
              </tr>
            );
          })}
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

export default CustomersTable;
