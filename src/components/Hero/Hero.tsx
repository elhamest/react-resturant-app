import Section from "../UI/Section";
import Flash from "../UI/Flash";
import OrderingHourMessage from "../../models/orderingHourMessage";
import backgroundImage from "../../assets/b1.jpg";

const Hero: React.FC<{ orderingHour: OrderingHourMessage }> = (props) => {
  return (
    <Section className="text-center md:flex md:flex-row md:justify-around md:items-center box-border">
      <div>
        <h3 className="text-sm font-medium text-thirdText mb-3.5 md:text-base">
          لحظات خوشایندی را با ما تجربه کنید...
        </h3>
        <h1 className="text-3xl text-primaryText mb-3 mt-2 md:text-5xl md:mb-5 md:mt-3 ">
          رستوران آسو
        </h1>
        <button className="btn border-none outline-none block m-auto mt-5 mb-6 text-sm font-semibold bg-primaryColor text-textIconColor hover:bg-darkPrimaryColor active:bg-darkPrimaryColor">
          مشاهده منو
        </button>
        <Flash orderingHour={props.orderingHour} />
      </div>
      <img
        src={backgroundImage}
        alt="Aso Resturant"
        className="hidden max-w-xl select-none md:block md:w-1/2"
      />
    </Section>
  );
};

export default Hero;
