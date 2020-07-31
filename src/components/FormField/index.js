import React from 'react';
import propTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormFieldWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type='color'] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;

Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${Label.Text} {
    transform: scale(0.6) translateY(-10px);
  }

  ${({ value }) => {
    const hasValue = value.length > 0;
    return (
      hasValue &&
      css`
        &:not([type='color']) + ${Label.Text} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;

const FormField = ({ value, onChange, name, type, label, suggestions }) => {
  const fieldId = `id_${name}`;
  // Aqui, uma estratégia para o código ficar mais legível.
  // Armazenamento de uma boolean que será usada para o operador ternario
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';
  // ------------------
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId} />
      <Input
        as={tag}
        id={fieldId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        autocomplete={hasSuggestions ? 'off' : 'on'}
        list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
      />
      <Label.Text>{label} :</Label.Text>
      {hasSuggestions && (
        <datalist id={`suggestionFor_${fieldId}`}>
          {suggestions.map((suggestion) => {
            return (
              <option
                value={suggestion}
                key={`suggestionFor_${fieldId}_option_${suggestion}`}
              >
                {suggestion}
              </option>
            );
          })}
        </datalist>
      )}
    </FormFieldWrapper>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  as: 'input',
  suggestions: [],
};

FormField.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  value: propTypes.string,
  type: propTypes.string,
  onChange: propTypes.func,
  suggestions: propTypes.arrayOf(propTypes.string),
};

export default FormField;
