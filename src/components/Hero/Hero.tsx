import backgroundImage from "../../assets/b1.jpg";

const Hero = () => {
  return (
    <div className="text-center md:flex md:flex-row md:justify-around md:items-center">
      <div>
        <h3 className="text-sm font-medium text-thirdText mb-3.5 md:text-base">
          لحظات خوشایندی را با ما تجربه کنید...
        </h3>
        <h1 className="text-3xl text-primaryText mb-2 mt-2 md:text-5xl md:mb-5 md:mt-3 ">
          رستوران آسو
        </h1>
        <h2 className="text-base font-semibold text-thirdText md:text-xl md:mt-2 md:mb-2">
          Aso Resturant
        </h2>
        <button className="btn border-none outline-none m-auto mt-5 text-sm font-semibold bg-primaryColor text-textIconColor hover:bg-darkPrimaryColor active:bg-darkPrimaryColor">
          مشاهده منو
        </button>
      </div>
      <img
        src={backgroundImage}
        alt="Aso Resturant"
        className="hidden mt-0 mb-0 mx-auto max-w-xl select-none md:block md:w-1/2"
      />
    </div>
  );
};

export default Hero;
