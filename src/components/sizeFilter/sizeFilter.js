import classes from "./SizeFilter.module.css";

function SizeFilter() {
  const sizes = ["XS", "S", "M", "L", "XXL"];

  return (
    <div className={classes.div}>
      {sizes.map((size) => (
        <label className={classes.label}>
          <input type="checkbox" className={classes.input} />
          <span className={classes.checkmark}>{size}</span>
        </label>
      ))}
      {/* <div className={classes.div}>different sizes</div> */}
    </div>
  );
}

export default SizeFilter;
