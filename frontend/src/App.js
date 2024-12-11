import { Route, Routes} from 'react-router-dom';
import SignUp from './LinkedPages/SignUp';
import SignIn from './LinkedPages/SignIn';
import DashboardSample from './LinkedPages/DashboardSample'
import ReactCalendar from './Components/ReactCalendar';
import CourseLink from './LinkedPages/CourseLink';
import MessageLink from './LinkedPages/MessageLink';
import ReportLink from './LinkedPages/ReportLink';
import SettingLink from './LinkedPages/SettingLink';

function App() {

  return (
    <div>

      <Routes>
        <Route path = '/signin' element = {<SignIn/>} exact ={true}></Route>
        <Route path = '/signup' element = {<SignUp/>} exact ={true}></Route>
        <Route path = '/' element = {<DashboardSample/>} exact ={true}></Route>
        <Route path = '/Calendar' element = {<ReactCalendar/>} exact ={true}></Route> 
        <Route path = '/Dashboard' element = {<DashboardSample/>} exact ={true}></Route>
        <Route path = '/My_Courses' element = {<CourseLink/>} exact ={true}></Route> 
        <Route path = '/Messages' element = {<MessageLink/>} exact ={true}></Route> 
        <Route path = '/Reports' element = {<ReportLink/>} exact ={true}></Route> 
        <Route path = '/Settings' element = {<SettingLink/>} exact ={true}></Route>    
      </Routes>
    </div>
  );
}

export default App;
