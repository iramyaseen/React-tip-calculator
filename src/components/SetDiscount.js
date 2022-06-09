import { useState } from "react";

const SetDiscount = ({ total, defaultVal }) => {
  const [discount, setDiscount] = useState(defaultVal);

  return (
    <div>
      <small>1 to {discount + "%"}</small>
      <div className="discount">
        <input type="range" min="1" max="20" value={discount} onChange={(e) => setDiscount(e.target.value)} />
        <p>{total - (discount * 500) / 100} to pay after Discount</p>
      </div>
    </div>
  );
};

export default SetDiscount;
