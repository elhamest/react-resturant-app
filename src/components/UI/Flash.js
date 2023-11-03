import styles from "./Flash.module.css";

const Flash = (props) => {
  const { message, detail, isInRange } = props.orderingHour;

  let colorClass = isInRange ? styles["in-range"] : styles["out-of-range"];
  return (
    <div className={`${styles.flash} ${colorClass}`}>
      <small>
        <i></i>
        {message}
        <br />
        {detail}
      </small>
    </div>
  );
};

export default Flash;
