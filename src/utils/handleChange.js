export const handleChange = (e, stateSet) => {
  const { name, value } = e.target;
  stateSet((prev) => ({ ...prev, [name]: value }));
};
