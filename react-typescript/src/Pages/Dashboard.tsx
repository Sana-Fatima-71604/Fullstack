import "../Styles/style.css";
import { Navbar } from "../Components/Navbar";
import { HeaderMenu } from "../Components/HeaderMenu";
import Cards from "../Components/Cards";
import { ReactNode } from "react";
import CourseTable from "../Components/CourseTable";

interface propFace {
  children: ReactNode;
}

const Dashboard: React.FC<propFace> = ({ children }) => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="main">
        <HeaderMenu />
        {children || (
          <div className="content">
            <Cards
              image="https://th.bing.com/th/id/OIP.C61qNWbyXWXQJ98NQK8vkAHaEK?w=265&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              button="Join"
              title="Web_Illustrations"
            />
            <Cards
              image="https://th.bing.com/th/id/OIP.C61qNWbyXWXQJ98NQK8vkAHaEK?w=265&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              button="Join"
              title="React_Course"
            />
            <Cards
              image="https://th.bing.com/th/id/OIP.ra_a2rigyTHOYB1yL2y9uQHaEU?w=282&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
              button="Join"
              title="Networking"
            />
          </div>
        )}
        <CourseTable />
      </div>
    </div>
  );
};

export default Dashboard;
