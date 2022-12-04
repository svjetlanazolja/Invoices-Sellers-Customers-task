import React from "react";
import CrudOption from "./crud-options/CrudOption";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { invoicesActiveIdSelector } from "../../redux/slices/invoices/invoicesSelectors";
import { useSelector } from "react-redux";

const CrudComponent = ({ route, id }) => {
  const activeId = useSelector(invoicesActiveIdSelector);

  return (
    <>
      <div className="crud_option_container">
        <span>
          <button disabled={true}>Disabled Button</button>
          <CrudOption route={route} type="add" id={id}>
            <button disabled={true} className="crud-icon-button">
              <AiOutlinePlus
                style={{
                  fontSize: "50px",
                  color: "#707070",
                  border: "3px solid #707070",
                  borderRadius: "100%",
                  background: "#d5e8d4",
                }}
              />
            </button>
          </CrudOption>
          <CrudOption route={route} type="update" id={id}>
            <button className="crud-icon-button">
              <HiPencil
                style={{
                  fontSize: "50px",
                  color: "#707070",
                  border: "3px solid #707070",
                  borderRadius: "100%",
                }}
              />
            </button>
          </CrudOption>
          <CrudOption route={route} type="delete" id={id}>
            <button className="crud-icon-button">
              <AiOutlineClose
                style={{
                  fontSize: "50px",
                  color: "#707070",
                  border: "3px solid #707070",
                  borderRadius: "100%",
                }}
              />
            </button>
          </CrudOption>
        </span>
      </div>
    </>
  );
};

export default CrudComponent;
