import CourseTable from "../Components/CourseTable";
import Dashboard from "./Dashboard";

const MyCourses: React.FC = () => {
  return (
    <>
      <Dashboard children={<CourseTable />} />
    </>
  );
};

export default MyCourses;
