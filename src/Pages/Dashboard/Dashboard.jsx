import DashboardHeader from "./DashboardHeader";
import DashboardHero from "./DashboardHero";
import DashMain from "./DashMain";
import Footer from "../../Layout/Footer/Footer";

const Dashboard = () => {
  return (
    <div className="container">
      <DashboardHeader />
      <DashboardHero />
      <DashMain />
      <Footer />
    </div>
  );
};

export default Dashboard;
