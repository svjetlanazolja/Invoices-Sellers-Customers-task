import React from "react";
import "./PageHeader.css";

const PageHeader = ({ children }) => {
  return (
    <div className="page_header">
      <div className="page_title">{children}</div>
    </div>
  );
};

export default PageHeader;
