 
import DashboardHeader from "./HeaderDashboard";
import DashboardProfit from "./ProfitDashboard";
import DashboardOrder from "./OrderDashboard";

 
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