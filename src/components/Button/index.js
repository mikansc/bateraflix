// import React from "react";

// import ButtonWrapper from "./styles";

// const Button = ({ children }) => {
//   return <ButtonWrapper>{children}</ButtonWrapper>;
// };

// export default Button;
import styled from "styled-components";

const sizes = {
  small: "10px 14px",
  default: "16px 24px",
  large: "20px 28px",
};

const Button = styled.button`
  background-color: ${(props) => props.bgColor || "var(--primary)"};
  color: ${(props) => props.txtColor || "var(--black)"};
  border: 1px solid ${(props) => props.txtColor || "var(--black)"};
  box-sizing: border-box;
  cursor: pointer;
  padding: ${(props) => sizes[props.size] || sizes["default"]};
  margin-right: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Button;
