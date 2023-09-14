import { useState } from "react";
import classes from "./SizeFilter.module.css";

function SizeFilter({ onChoice }) {
  const sizes = ["XS", "S", "M", "L", "XXL"];

  const [checkedState, setcheckedState] = useState(
    new Array(sizes.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setcheckedState(updatedCheckedState);
  };

  const isChecked = (size, index) => checkedState[index];

  return (
    <div className={classes.div}>
      <h6>Filter by Size:</h6>
      {sizes.map((size, index) => (
        <label key={index} className={classes.label}>
          <input
            id={index}
            type="checkbox"
            value={size}
            onClick={onChoice}
            className={classes.input}
            checked={checkedState[index]}
            onChange={() => handleOnChange(index)}
          />
          <span
            className={
              isChecked(size, index) ? classes.checkedSize : classes.unchecked
            }
          >
            {size}
          </span>
        </label>
      ))}
    </div>
  );
}

export default SizeFilter;
