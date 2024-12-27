import { useRoutes } from "react-router-dom";
import "@mantine/core/styles.css";
import SignUp from "./LinkedPages/SignUp.jsx";
import SignIn from "./LinkedPages/SignIn.jsx";
import DashboardSample from "./LinkedPages/DashboardSample.jsx";
import ReactCalendar from "./Components/ReactCalendar.jsx";
import CourseLink from "./LinkedPages/CourseLink.jsx";
import MessageLink from "./LinkedPages/MessageLink.jsx";
import ReportLink from "./LinkedPages/ReportLink.jsx";
import SettingLink from "./LinkedPages/SettingLink.jsx";
import Demo from "./demo.jsx";
import { useState, React } from "react";
import Context from "./Context/Context.jsx";

function App() {
  const [data, changeData] = useState("");

  const routes = useRoutes([
    {
      path: "/signin",
      element: (
        <SignIn
          prop={(currentmailvalue) => {
            changeData(currentmailvalue);
          }}
        />
      ),
    },
    { path: "/signup", element: <SignUp /> },
    { path: "/", element: <DashboardSample /> },
    { path: "/Calendar", element: <ReactCalendar /> },
    { path: "/Dashboard", element: <DashboardSample /> },
    { path: "/My_Courses", element: <CourseLink /> },
    { path: "/Messages", element: <MessageLink /> },
    { path: "/Reports", element: <ReportLink /> },
    { path: "/Settings", element: <SettingLink /> },
    { path: "/demo", element: <Demo /> },
  ]);

  return (
    <>
      <Context.Provider value={{ data, changeData }}>
        <div>{routes}</div>
      </Context.Provider>
    </>
  );
}

export default App;
