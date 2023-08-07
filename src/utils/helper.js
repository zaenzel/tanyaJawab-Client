import moment from "moment";

export const category = [
  "Aqidah",
  "Al-Qur'an",
  "Hadist",
  "Qurban",
  "Thaharah",
  "Sholat",
  "Puasa",
  "Zakat",
  "Haji & Umrah",
  "Makanan & Minuman",
  "Dzikir & Doa",
  "Waris",
  "Fiqih Muamalah",
  "Pernikahan & Keluarga",
  "Lain-lain",
];

export function date(value) {
  return moment(value).format("LL");
}

export const handleChange = (e, stateSet) => {
  const { name, value } = e.target;
  stateSet((prev) => ({ ...prev, [name]: value }));
};

export const signUpTextField = (passType) => {
  const field = [
    { id: 1, type: "text", placeholder: "nama", name: "name" },
    { id: 2, type: "text", placeholder: "kota", name: "city" },
    { id: 3, type: "email", placeholder: "email", name: "email" },
    { id: 4, type: passType, placeholder: "password", name: "password" },
  ];

  return field;
};

export const loginTextField = (passType) => {
  const field = [
    { id: 1, type: "email", placeholder: "email", name: "email" },
    { id: 2, type: passType, placeholder: "password", name: "password" },
  ];

  return field;
};

export const askField = [
  { id: 1, type: "text", name: "questioner", label: "Nama" },
  { id: 2, type: "text", name: "city", label: "Asal Kota" },
  { id: 3, type: "text", name: "title", label: "Judul" },
  { id: 4, type: "select", name: "category" },
  { id: 5, type: "textarea", name: "question" },
];
