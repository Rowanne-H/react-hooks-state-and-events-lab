import React, {useState} from "react";

function Item({ name, category }) {
  const [isAdd, setIsAdd] = useState(true)
  const itemButtonText = isAdd ? "Add to Cart" : "Remove From Cart"
  const itemClass = isAdd ? "" : "in-cart"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={e=>setIsAdd(!isAdd)}>{itemButtonText}</button>
    </li>
  );
}

export default Item;
