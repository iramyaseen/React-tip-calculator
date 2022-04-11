import React, { useState } from "react";
function TipCalculate() {
  const [percentageTip, setPercentageTip] = useState(0);
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalp, setTotalp] = useState(0);
  const [name, setName] = useState({ discountValue: "" });

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +billAmount > 0 && +percentageTip > 0;
    if (!formValid) {
      return;
    }
    const tipAmount = +billAmount * (+percentageTip / 100);
    var total = +billAmount * (1 + percentageTip / 100);
    setTipAmount(tipAmount);
    setTotal(total);
  };
  const sum = " Your Discount Value   ";
  return (
    <div className="App">
      <h1 className="tip">
        <span>Tip</span> <span>Calculator</span>
      </h1>
      <form className="form" onSubmit={calculate}>
        <div className="bil_amount">
          <div>
            <label>Bill Amount : </label>
          </div>
          <div>
            <input
              placeholder={billAmount}
              onChange={(e) => setBillAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="percentage">
          <div>
            <label>Percentage Tip : </label>
          </div>
          <div>
            <input
              type="Number"
              placeholder={percentageTip}
              onChange={(e) => setPercentageTip(e.target.value)}
            />
          </div>
        </div>

        <div className="tip_amount">
          <div>
            <p>Tip Amount : </p>
          </div>
          <div>
            <input placeholder={"$" + tipAmount.toFixed(2)} disabled />
          </div>
        </div>

        <div className="total">
          <div>
            <p>Total : </p>
          </div>
          <div>
            <input placeholder={"$" + total.toFixed(2)} disabled />
            <br></br>
          </div>
        </div>
        {total >= 500 ? (
          <div>
            <small>1 to {name.discountValue + "%"}</small>
            <p className="discount">
              <input
                type="range"
                min="1"
                max="20"
                value={name.discountValue}
                onChange={(e) =>
                  setName({ ...name, discountValue: e.target.value })
                }
              />
              <br></br>
              <br></br>
              {total >= 500
                ? total - (name.discountValue * 500) / 100 + sum
                : ""}
            </p>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        <div className="total">
          <div>
            <p>Person : </p>
          </div>
          <div>
            <input
              placeholder="Enter person"
              onChange={(e) => setTotalp(e.target.value)}
            />
          </div>
        </div>
        <div className="total">
          <div>
            <p>Total Person: </p>
          </div>
          <div>
            <input value={total / totalp} disabled />
          </div>
        </div>

        <button className="btn" type="submit">
          Calculate
        </button>
      </form>
    </div>
  );
}

export default TipCalculate;

// 2 * 100 / 100
