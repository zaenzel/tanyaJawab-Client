import axios from "axios";

export default async function getPosts(id) {
  const api_url = process.env.API_BASE_URL;
  try {
    if (id) {
      const res = await axios.get(`${api_url}/posts?category_id=${id}`, {
        cache: "no-store",
      });
      return res.data;
    }

    const res = await axios.get(`${api_url}/posts`, {
      cache: "no-store",
    });
    return res.data;
  } catch (error) {
    return error;
  }
}
