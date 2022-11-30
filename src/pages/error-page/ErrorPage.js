import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      <h2>Page not found</h2>
      <div className="ErrorPageLink">
        <Link to="/"> Back to home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
