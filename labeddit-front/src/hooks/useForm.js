import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  // onChange para eventos dos estados.
  const onChangeForm = (event) => {
    const { name, value } = event.target;
    // settar novos valores
    setForm({ ...form, [name]: value });
  };
  // limpar campos de inputs.
  const cleanFields = () => {
    setForm(initialState);
  };
  return { form, onChangeForm, cleanFields };
};
export default useForm;
