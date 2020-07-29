import React from 'react';

const FormField = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Nome da Categoria:
        <input name="name" type="text" value={value} onChange={onChange} />
      </label>
    </div>
  );
};

export default FormField;
