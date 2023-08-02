import axios from "axios";

export default async function getPostDetail(id) {
  const api_url = process.env.API_BASE_URL;
  try {
    const res = await axios.get(`${api_url}/posts/${id}`, {
      cache: "no-store",
    });
    return res.data;
  } catch (error) {
    return error;
  }
}
