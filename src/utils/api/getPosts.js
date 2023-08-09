import axios from "axios";

export default async function getPosts(category) {
  const api_url = process.env.NEXT_PUBLIC_API_BASE_MOCK;
  try {
    if (category) {
      const res = await axios.get(`${api_url}?category=${category}`, {
        cache: "force-cache",
      });
      return res;
    }

    const res = await axios.get(`${api_url}`, {
      cache: "force-cache",
    });
    return res;
  } catch (error) {
    return error;
  }
}
