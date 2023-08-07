import axios from "axios";

export default async function getPostDetail(id) {
  const api_url = process.env.NEXT_PUBLIC_API_BASE_MOCK;
  try {
    const res = await axios.get(`${api_url}/${id}`, {
      cache: "no-store",
    });
    return res.data;
  } catch (error) {
    return error;
  }
}
