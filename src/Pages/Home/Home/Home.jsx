import Banner from "../Banner/Banner";

import DayClasses from "../DayClasses/DayClasses";
import Description from "../Description/Description";
import Information from "../Information/Information";
import ManagePlan from "../ManagePlan/ManagePlan";



const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Description></Description>
            <Information></Information>
            <DayClasses></DayClasses>
            <ManagePlan></ManagePlan>
            
        </div>
    );
};

export default Home;