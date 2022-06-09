import { useState } from "react";
import FromGroup from "./Input";
import SetDiscount from "./SetDiscount";

function TipCalculate() {
  const [percentageTip, setPercentageTip] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalp, setTotalp] = useState(0);

  const calculate = (e) => {
    e.preventDefault();

    const isFormValid = +billAmount > 0 && +percentageTip > 0;
    if (!isFormValid) return;

    const tipAmount = +billAmount * (+percentageTip / 100);
    const total = +billAmount * (1 + percentageTip / 100);
    setTipAmount(tipAmount);
    setTotal(total);
  };

  return (
    <div className="App">
      <h1 className="tip">Tip Calculator</h1>
      <form className="form" onSubmit={calculate}>
        <FromGroup
          label="Bill Amount"
          placeholder={billAmount}
          type="number"
          min="0"
          changeHandler={(e) => setBillAmount(e.target.value)}
          required
        />
        <FromGroup
          label="Percentage Tip"
          placeholder={percentageTip}
          type="number"
          min="0"
          changeHandler={(e) => setPercentageTip(e.target.value)}
          required
        />
        <FromGroup
          label="Tip Amount"
          placeholder={"$" + tipAmount.toFixed(2)}
          type="number"
          changeHandler={setTotalp}
          disabled
        />
        <FromGroup label="Total" placeholder={"$" + total.toFixed(2)} type="number" disabled />

        {total > 500 && <SetDiscount total={total} defaultVal={1} />}

        <FromGroup label="No. of person" type="number" value={1} changeHandler={(e) => setTotalp(e.target.value)} />

        <FromGroup
          label="Total Per Person"
          type="number"
          value={total / totalp ? (total / totalp).toFixed(2) : ""}
          disabled
        />

        <button className="btn" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
}

export default TipCalculate;
