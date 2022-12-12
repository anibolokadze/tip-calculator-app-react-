import React from "react";
import styled from "styled-components";
import { Button } from "./TipButtons.Styled";
import { colors, fontSize, borderRadius } from "../../Variables";

export default function TipContainer({ setTip }) {
  const tipPercentages = [5, 10, 15, 25, 50];

  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault();
    }
  };

  return (
    <>
      <label>Select Tip %</label>
      <TipInput>
        {tipPercentages.map((tipPercentage) => {
          return (
            <Button
              className="tips"
              onClick={() => {
                setTip(tipPercentage);
              }}
              key={tipPercentage}
            >
              {tipPercentage}%
            </Button>
          );
        })}

        <input
          placeholder="custom"
          type="number"
          min="0"
          onKeyPress={preventMinus}
          onKeyDown={(e) => {
            if (e.key === ".") {
              e.preventDefault();
            }
          }}
          onChange={(e) => {
            setTip(e.target.valueAsNumber);
          }}
        />
      </TipInput>
    </>
  );
}

export const TipInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10%;
  row-gap: 16px;
  justify-content: space-between;
  input {
    width: 45%;
    height: 48px;
    text-align: right;
    border: none;
    outline: none;
    background-color: ${colors.VeryLightGrayishCyan};
    border-radius: ${borderRadius.small};
    font-size: ${fontSize.inputs};
    padding-right: 20px;
    color: ${colors.VeryDarkCyan};
    cursor: pointer;
  }

  @media (min-width: 900px) {
    justify-content: space-around;
  }
`;
