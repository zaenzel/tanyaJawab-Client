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


