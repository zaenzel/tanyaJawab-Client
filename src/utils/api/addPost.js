import axios from "axios";

export default async function addPost(post) {
  const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;

  const res = await axios.post(`${api_url}/posts`, {
    title: post.title,
    id_category: post.id_category,
    id_questioner: post.id_questioner,
    question: post.question,
  });
  return res.data;
}
