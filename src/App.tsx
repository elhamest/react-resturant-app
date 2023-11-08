import Layout from "./components/Layout/Layout"
import Hero from "./components/Hero/Hero";
import orderingHourMessage from "./models/orderingHourMessage";
import Category from "./components/Category/Category";

function App() {
  const getOrderingTimeMessage = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    // Define the time ranges
    const startHour1 = 11;
    const startMinute1 = 30;
    const endHour1 = 15;
    const endMinute1 = 30;
    const startHour2 = 18;
    const startMinute2 = 30;
    const endHour2 = 23;
    const endMinute2 = 30;
    let message = "";
    let detail = "";
    let isInRange = false;

    if (
      currentHour < startHour1 ||
      (currentHour === startHour1 && currentMinute < startMinute1)
    ) {
      message = "سفارش نمی پذیریم";
      detail = `شروع سفارش گیری از ${startHour1}:${startMinute1} امروز`;
    } else if (
      (currentHour > endHour1 ||
        (currentHour === endHour1 && currentMinute >= endMinute1)) &&
      (currentHour < startHour2 ||
        (currentHour === startHour2 && currentMinute < startMinute2))
    ) {
      message = "سفارش نمی پذیریم";
      detail = `شروع سفارش گیری از ${startHour2}:${startMinute2} امروز`;
    } else if (
      (currentHour > endHour2 ||
        (currentHour === endHour2 && currentMinute >= endMinute2)) &&
      (currentHour < startHour1 ||
        (currentHour === startHour1 && currentMinute < startMinute1))
    ) {
      message = "سفارش نمی پذیریم";
      detail = `شروع سفارش گیری از ${startHour1}:${startMinute1} فردا`;
    } else {
      message = "سفارش می پذیریم";
      isInRange = true;
    }

    return new orderingHourMessage(message, detail, isInRange);
  };

  return (
    <Layout>
      <Hero orderingHour={getOrderingTimeMessage()} />
      <Category />
    </Layout>
  );
}

export default App;

//currentHour={`${currentHour}:${currentMinute}`}
