// import { useState } from "react";
import classes from "./SizeFilter.module.css";

function SizeFilter({ onChoice }) {
  const sizes = ["XS", "S", "M", "L", "XXL"];

  // const [checked, setChecked] = useState(new Array(sizes.length).fill(false));

  // const handleOnChange = () => {
  
  // }

  return (
    <div className={classes.div}>
      <h6>Filter by Size:</h6>
      {sizes.map((size) => (
        <label id={size} key={size} className={classes.label}>
          <input
            type="checkbox"
            value={size}
            onClick={onChoice}
            className={classes.input}
          />
          <span className={classes.checkmark}>{size}</span>
        </label>
      ))}
    </div>
  );
}

export default SizeFilter;
