import dishImage from "../../../assets/images/plate2.png";
import styles from "./CategoryLogo.module.css";

const CategoryLogo = () => {
  return (
    <div className="hidden sm:m-0 sm:mx-auto sm:block sm:w-[470px] sm:h-[470px]">
    <img src={dishImage} alt="رستوران" className={`${styles["category-logo-img"]} select-none`}/>
  </div>
  );
};

export default CategoryLogo;
