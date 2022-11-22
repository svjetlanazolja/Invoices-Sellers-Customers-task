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

async function updateSingleInvoice(id, data) {
  try {
    const res = await axios.put(backend_url + route + `/${id}`, data);
    return res;
  } catch (error) {
    console.error(error);
  }
}

async function AddSingleInvoice(data) {
  try {
    const res = await axios.post(backend_url + route, data);
    return res;
  } catch (error) {
    console.error(error);
  }
}

async function deleteSingleInvoice(id) {
  try {
    const res = await axios.delete(backend_url + route + `/${id}`);
    return res;
  } catch (error) {
    console.error(error);
  }
}

export const invoiceServices = {
  getInvoices,
  getSingleInvoice,
  updateSingleInvoice,
  AddSingleInvoice,
  deleteSingleInvoice,
};
