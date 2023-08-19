import DashboardHeader from "./dashboardHeader";
import DashboardProfit from "./dashboardProfit";
import DashboardOrder from "./orderDashboard";

 
const DashBoardHome = () => {
    return (
        <div>
            <DashboardHeader/>
            <DashboardProfit/>
            <DashboardOrder/>
        </div>
    );
};

export default DashBoardHome;