import React from "react";
import Modal from "../modal/Modal";
import CrudOption from "./crud-options/CrudOption";

const CrudComponent = ({ route, id }) => {
  return (
    <div>
      <CrudOption route={route} type="add" id={id} />
      <CrudOption route={route} type="update" id={id} />
      <CrudOption route={route} type="delete" id={id} />
    </div>
  );
};

export default CrudComponent;
