import React from "react";
import { Total } from "./Results.Styled";
import { TipAmount } from "./Results.Styled";
import { Reset } from "./Results.Styled";
import { TotalAmount } from "./Results.Styled";

export default function Amount({ billData, reset }) {
  return (
    <Total>
      <TipAmount>
        <div>
          <h1>Tip Amount </h1>
          <p>/ person</p>
        </div>
        <span>{`$ ${billData.tipPerPerson}`}</span>
      </TipAmount>
      <TotalAmount>
        <div>
          <h1>Total </h1>
          <p>/ person</p>
        </div>
        <span>{`$ ${billData.billPerPerson}`}</span>
      </TotalAmount>
      <Reset
        onClick={() => {
          reset();
        }}
      >
        RESET
      </Reset>
    </Total>
  );
}
