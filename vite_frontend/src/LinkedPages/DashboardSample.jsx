import "../Styles/DashboardSample.css";
import Sidenav from "../Components/Sidenav";
import Horizontalbar from "../Components/Horizontalbar";
import CourseTable from "../Components/CourseTable";

// import ReactCalendar from '../Components/ReactCalendar';

function DashboardSample({ props }) {
  return (
    <div className="dashboard">
      <Sidenav />
      <div className="main">
        <Horizontalbar />
        <CourseTable props={props} />
      </div>
    </div>
  );
}

export default DashboardSample;
