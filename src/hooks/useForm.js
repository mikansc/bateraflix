import { useState } from 'react';

function useForm(initialData) {
  const [values, setValues] = useState(initialData);

  const setValue = (key, value) => {
    setValues({
      ...values,
      // set the key valye to be the key string parameter using [key]
      [key]: value,
    });
  };

  const handleChange = (event) => {
    setValue(event.target.getAttribute('name'), event.target.value);
  };

  const clearForm = () => {
    setValues({ title: '', description: '', bgColor: '#455582' });
  };

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
