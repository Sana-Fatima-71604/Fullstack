import { Route, Routes} from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import DashboardSample from './Components/DashboardSample'
import ReactCalendar from './Components/ReactCalendar';
import CourseLink from './Components/LinkedPages/CourseLink';
import MessageLink from './Components/LinkedPages/MessageLink';
import ReportLink from './Components/LinkedPages/ReportLink';
import SettingLink from './Components/LinkedPages/SettingLink';

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
