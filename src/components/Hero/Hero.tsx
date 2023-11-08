import Section from "../UI/Section";
import Flash from "../UI/Flash";
import OrderingHourMessage from "../../models/orderingHourMessage";
import backgroundImage from "../../assets/images/hero.jpg";

const Hero: React.FC<{ orderingHour: OrderingHourMessage }> = (props) => {
  return (
    <Section className="text-center m-auto md:flex md:flex-row md:justify-around md:items-center box-border">
      <div>
        <h2 className="text-sm font-medium text-secondaryText mb-1 md:text-lg">
          لحظات خوشایندی را با ما تجربه کنید...
        </h2>
        <button className="btn border-none outline-none inline-block m-auto mt-5 mb-6 text-sm font-semibold bg-primaryColor text-textIconColor hover:bg-darkPrimaryColor active:bg-darkPrimaryColor">
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

/*  <h1 className="text-3xl text-primaryText mb-4 mt-2 md:text-5xl md:mb-5 md:mt-3 ">
          رستوران آسو
        </h1>
*/
