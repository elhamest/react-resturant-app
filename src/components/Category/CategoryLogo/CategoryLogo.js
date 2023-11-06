import dishImage from "../../../assets/images/plate2.png";
import styles from "./CategoryLogo.module.css";

const CategoryLogo = () => {
  return (
    <div className={styles["category-logo"]}>
    <img src={dishImage} alt="رستوران" />
  </div>
  );
};

export default CategoryLogo;
