import CategoryLogo from "./CategoryLogo/CategoryLogo";
import CategoryList from "./CategoryList/CategoryList";
import styles from "./Category.module.css";

const Category = () => {
  return (
    <div className={styles.category}>
      <CategoryLogo />
      <CategoryList />
    </div>
  );
};

export default Category;
