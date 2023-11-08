import styles from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  return (
    <div className={`${styles.item} flex flex-row justify-around items-center min-w-[200px] my-2.5 mx-4 text-center rounded-[20px] px-[15px] pt-[20px] pb-0 fade-in-up sm:flex-col sm:flex-1 sm:p-0`}>
      <a
        className="cursor-pointer flex justify-center items-center h-[100px] sm:h-[180px]"
        href="/menu/index.php?id=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={props.image} alt={props.alternative} className={`${styles["item-image-link"]} inline-block  select-none pb-0 w-11 sm:w-[64px] `}/>
      </a>
      <a
        className={`inline-block text-darkPrimaryColor text-base font-bold p-0 cursor-pointer no-underline :visited:no-underline sm:pt-0 sm:px-[15px] sm:pb-5 ${styles["item-text-link"]}`}
        href="/menu/index.php?id=1"
        target="_blank"
        rel="noopener noreferrer"
      >{props.title}
      </a>
    </div>
  );
};

export default CategoryItem;
