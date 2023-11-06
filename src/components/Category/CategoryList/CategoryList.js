import CategoryItem from "./CategoryItem";
import mealImage from "../../../assets/images/meal-96.png";
import kebabImage from "../../../assets/images/kebab-100.png";
import khorakImage from "../../../assets/images/work-100.png";
import styles from "./CategoryList.module.css";

const categories = [
  { image: mealImage, title: "غذای ایرانی", alternative: "Iranian food" },
  {
    image: kebabImage,
    title: "چلوکباب",
    alternative: "Kebab food",
  },
  {
    image: khorakImage,
    title: "خوراک",
    alternative: "Khorak food",
  },
];

const CategoryTable = () => {
  return (
    <div className={styles["menu-wrapper"]}>
      <h1 className="fade-in-up">منوهای رستوران</h1>
      <div className={styles["menu-content"]}>
        {categories.map((category) => {
          return (
            <CategoryItem
              key={category.alternative}
              image={category.image}
              title={category.title}
              alternative={category.alternative}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTable;
