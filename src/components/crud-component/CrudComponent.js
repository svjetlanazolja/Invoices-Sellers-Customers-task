import React from "react";
import CrudOption from "./crud-options/CrudOption";
import { AiOutlinePlus } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";

const CrudComponent = ({ route, id }) => {
  return (
    <>
      <div className="crud_option_container">
        <span>
          <CrudOption route={route} type="add" id={id}>
            <AiOutlinePlus
              style={{
                fontSize: "50px",
                color: "#707070",
                border: "3px solid #707070",
                borderRadius: "100%",
                background: "#d5e8d4",
              }}
            />
          </CrudOption>
          <CrudOption route={route} type="update" id={id}>
            <HiPencil
              style={{
                fontSize: "50px",
                color: "#707070",
                border: "3px solid #707070",
                borderRadius: "100%",
              }}
            />
          </CrudOption>
          <CrudOption route={route} type="delete" id={id}>
            <span
              style={{
                fontSize: "34px",
                color: "#707070",
                border: "3px solid #707070",
                borderRadius: "100%",
              }}
            >
              X
            </span>
          </CrudOption>
        </span>
      </div>
    </>
  );
};

export default CrudComponent;
