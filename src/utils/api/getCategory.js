import axios from "axios";

export default async function getCategory() {
  const api_url = process.env.API_BASE_URL;
  try {
    const res = await axios.get(`${api_url}/category`);
    return res.data;
  } catch (error) {
    return error;
  }
}
