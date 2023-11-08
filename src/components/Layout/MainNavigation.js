import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
const logoutHandler = ()=>{}

  return (
    <header
      className={`w-full h-20 bg-white flex justify-between items-center py-0 px-[10%] ${styles.header}`}
    >
      <Link to="/">
        <div className="text-2xl m-0 text-primaryColor">Asoo</div>
      </Link>
      <nav>
        <ul className="list-none m-0 p-0 flex items-center">
          <li className="my-0 mx-4">
            <Link className="text-primaryText font-bold no-underline hover:text-primaryColor">ورود</Link>
          </li>
          <li className="text-primaryText font-bold no-underline my-0 mx-4 hover:text-primaryColor">خروج</li>
          <li className="my-0 mx-4">
            <Link className="text-primaryText font-bold no-underline hover:text-primaryColor">پروفایل</Link>
          </li>
          <li className="my-0 mx-4"><button className="text-primaryText bg-transparent border border-solid border-white font-bold py-2 px-6 rounded-md cursor-pointer hover:bg-primaryColor hover:text-textIconColor" onClick={logoutHandler}>سبد خرید</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
