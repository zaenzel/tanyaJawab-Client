import axios from "axios";

export default async function addPost(post) {
  const api_url = process.env.NEXT_PUBLIC_API_BASE_MOCK;

  const res = await axios.post(`${api_url}`, {
    questioner: post.questioner,
    city: post.city,
    title: post.title,
    category: post.category,
    question: post.question,
  });
  return res;
}
