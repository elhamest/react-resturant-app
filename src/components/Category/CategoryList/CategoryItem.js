import styles from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  return (
    <div className={`${styles["menu-content-item"]} fade-in-up`}>
      <a
        className={styles["image-link"]}
        href="/menu/index.php?id=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={props.image} alt={props.alternative} />
      </a>
      <a
        className={styles["text-link"]}
        href="/menu/index.php?id=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
    </div>
  );
};

export default CategoryItem;
