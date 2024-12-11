import {useRoutes} from 'react-router-dom';
import SignUp from './LinkedPages/SignUp';
import SignIn from './LinkedPages/SignIn';
import DashboardSample from './LinkedPages/DashboardSample'
import ReactCalendar from './Components/ReactCalendar';
import CourseLink from './LinkedPages/CourseLink';
import MessageLink from './LinkedPages/MessageLink';
import ReportLink from './LinkedPages/ReportLink';
import SettingLink from './LinkedPages/SettingLink';


function App() {

  const routes = useRoutes([
    {path: '/signin', element: <SignIn/>},
    {path: '/signup', element: <SignUp/>},
    {path: '/', element: <DashboardSample/>},
    {path: '/Calendar', element: <ReactCalendar/>},
    {path: '/Dashboard', element: <DashboardSample/>},
    {path: '/My_Courses', element: <CourseLink/>},
    {path: '/Messages', element: <MessageLink/>},
    {path: '/Reports', element: <ReportLink/>},
    {path: '/Settings', element: <SettingLink/>},
  ])
  return (
    <div>

      {routes}
      
    </div>
  );
}

export default App;
