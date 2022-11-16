import axios from "axios";

const backend_url = process.env.REACT_APP_BACKEND_URL;
const route = "/invoices";

async function getInvoices() {
  try {
    const res = await axios.get(backend_url + route);
    return res;
  } catch (error) {
    console.error(error);
  }
}

async function getSingleInvoice(id) {
  try {
    const res = await axios.get(backend_url + route + `/${id}`);
    return res;
  } catch (error) {
    console.error(error);
  }
}
export const invoiceServices = { getInvoices, getSingleInvoice };
