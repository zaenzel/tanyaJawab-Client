import axios from "axios";
const api_url = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function userRegister(user) {
  const res = await axios.post(`${api_url}/users/register`, {
    name: user.name,
    city: user.city,
    email: user.email,
    password: user.password,
  });
  return res.data;
}

export async function userLogin(user) {
  const res = await axios.post(`${api_url}/users/login`, {
    email: user.email,
    password: user.password,
  });
  return res
}
