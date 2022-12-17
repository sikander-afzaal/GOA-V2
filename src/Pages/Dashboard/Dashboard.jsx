import DashboardHeader from "./DashboardHeader";
import DashboardHero from "./DashboardHero";
import DashMain from "./DashMain";

const Dashboard = () => {
  return (
    <div className="container">
      <DashboardHeader />
      <DashboardHero />
      <DashMain />
    </div>
  );
};

export default Dashboard;
