import headerImg from "./images/logo.svg";
import { Container } from "./components/Card/Container.Styled";
import Input from "./components/Input";
import TipContainer from "./components/TipContainer";
import Results from "./components/Results";
import { useState, useEffect } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState(0);

  const [billData, setBillData] = useState({
    bill: 0,
    people: 0,
    tip: 0,
    tipPerPerson: 0,
    billPerPerson: 0,
  });

  useEffect(() => {
    if (billData.bill > 0 && billData.people > 0) {
      setBillData((prevState) => ({
        ...prevState,
        tipPerPerson: (
          (billData.bill * (billData.tip / 100)) /
          billData.people
        ).toFixed(2),
      }));
      setBillData((prevState) => ({
        ...prevState,
        billPerPerson: (
          (billData.bill * (1 + billData.tip / 100)) /
          billData.people
        ).toFixed(2),
      }));
    }
  }, [billData.people, billData.bill, billData.tip]);

  const [peopleError, setPeopleError] = useState("");

  useEffect(() => {
    if (billData.people === 0) {
      setPeopleError(`Can't be zero`);
    } else {
      setPeopleError(``);
    }
  }, [billData.people]);

  function reset() {
    setBillData({
      bill: 0,
      people: 0,
      tip: 0,
      tipPerPerson: 0,
      billPerPerson: 0,
    });
  }

  return (
    <>
      <img className="logo" src={headerImg} alt="logo" />

      <Container>
        <div className="left">
          <Input
            label={"Bill"}
            value={billData.bill}
            placeholder={0}
            onChange={(e) => {
              setBillData((prevState) => ({
                ...prevState,
                bill: e.target.valueAsNumber > 0 ? e.target.valueAsNumber : 0,
              }));
            }}
          />
          <TipContainer
            setTip={(tip) => {
              setBillData((prevState) => ({
                ...prevState,
                tip: tip,
              }));
            }}
          />
          <Input
            label={"Number of people"}
            placeholder={0}
            value={billData.people}
            onChange={(e) => {
              setBillData((prevState) => ({
                ...prevState,
                people: e.target.valueAsNumber > 0 ? e.target.valueAsNumber : 0,
              }));
            }}
            />
            <div style={{color: 'red'}}>{peopleError}</div>
        </div>
        <div className="right">
          <Results billData={billData} reset={reset} />
        </div>
      </Container>
    </>
  );
}

export default App;
