import React from "react";
import styled from "styled-components";
import dollarIcon from "../../images/icon-dollar.svg";
import { colors, borderRadius, fontSize } from "../../Variables";

export default function InputBill({ value, label, placeholder, onChange }) {
  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };
  return (
    <>
      <BillInput>
        <label>{label}</label>
        <input
          placeholder={placeholder}
          type="number"
          min="0"
          onKeyPress={preventMinus}
          value={value}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </BillInput>
    </>
  );
}

export const BillInput = styled.div`
  label {
    color: ${colors.GrayishCyan};
  }
  input {
    background-image: url(${dollarIcon});
    background-repeat: no-repeat;
    background-size: 12px;
    background-position: 10px 13px;
    text-align: right;
    width: 100%;
    height: 48px;
    border: none;
    outline: none;
    border-radius: ${borderRadius.small};
    font-size: ${fontSize.big};
    background-color: ${colors.VeryLightGrayishCyan};
    padding: 0 20px 0 0;
    color: ${colors.VeryDarkCyan};
    font-size: ${fontSize.inputs};
    cursor: pointer;

    &:hover {
      border: 2px solid ${colors.StrongCyan};
    }
  }
`;
