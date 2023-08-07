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
