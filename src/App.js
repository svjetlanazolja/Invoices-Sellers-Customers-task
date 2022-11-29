import "./App.css";
import { Route, Routes } from "react-router-dom";
import Invoices from "./pages/Invoices";
import Customer from "./pages/Customers";
import Sellers from "./pages/Sellers";
import HandleRouteId from "./route/Route";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<div>404</div>} />
        <Route path="/" element={<Invoices />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/invoices/:id" element={<HandleRouteId />} />
        <Route path="customers" element={<Customer />} />
        <Route path="sellers" element={<Sellers />} />
      </Routes>
    </div>
  );
}

export default App;
