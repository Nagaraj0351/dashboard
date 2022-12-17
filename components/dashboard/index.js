import Notification from "./notification";
import TodayPlan from "./TodayPlan";

const DashboardComponent = () => {
  const notifications = [
    {
      id: 1,
      type: "Recharge",
      title: "Mobile Recharge",
      status: "Tomorrow",
    },
    {
      id: 2,
      type: "Bill payment",
      title: "Credit card bill payment",
      status: "Deadline is today",
    },
    {
      id: 3,
      type: "Pharmaceutical",
      title: "Quick element dissolution testing",
      status: "Accepted",
    },
  ];

  return (
    <>
      <TodayPlan />
      <Notification notifications={notifications} />
    </>
  );
};

export default DashboardComponent;
