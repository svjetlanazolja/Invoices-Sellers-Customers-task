import axios from "axios";

const backend_url = process.env.REACT_APP_BACKEND_URL;
const route = "/sellers";

async function getSellers() {
  try {
    const res = await axios.get(backend_url + route);
    return res;
  } catch (error) {
    console.error(error);
  }
}

async function getSingleSeller(id) {
  try {
    const res = await axios.get(backend_url + route + `/${id}`);
    return res;
  } catch (error) {
    console.error(error);
  }
}
export const sellersServices = { getSellers, getSingleSeller };
