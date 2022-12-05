import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Invoices from "./pages/Invoices";
import Customer from "./pages/Customers";
import Sellers from "./pages/Sellers";
import HandleRouteId from "./route/Route";
import ErrorPage from "./pages/error-page/ErrorPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Navigate to="/invoices" />} />

        <Route path="/invoices" element={<Invoices />} />
        {/* <Route path="/invoices/:id" element={<Invoices />} /> */}

        {/*         
        <Route path="/invoices" element={<Invoices />}>
          <Route path="/invoices/:id" element={<Invoices />} />
        </Route> */}

        <Route path="customers" element={<Customer />} />
        <Route path="sellers" element={<Sellers />} />
      </Routes>
    </div>
  );
}

export default App;
