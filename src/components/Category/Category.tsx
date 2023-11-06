//import CategoryLogo from "./CategoryLogo/CategoryLogo";
import dishImage from "../../assets/images/plate2.png";

import CategoryList from "./CategoryList/CategoryList";
import styles from "./Category.module.css";

const Category = () => {
  return (
    <div className={styles.category}>
      <div className={styles["category-logo"]}>
        <img src={dishImage} alt="رستوران" />
      </div>

      <CategoryList />
    </div>
  );
};

export default Category;
