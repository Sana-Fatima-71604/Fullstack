import DashboardSample from "../LinkedPages/DashboardSample";
import '../Styles/DashboardSample.css';
// import AddingCourses from "../Components/AddingCourses";
import { Button } from '@mantine/core';

function CourseLink () {

    return (
        <>
             
            <DashboardSample props = {
            <div className="card" style={{margin: "25px", width: "1350px", height: "60px", padding: "50px", paddingBottom:"30px"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h3>Courses</h3>
                    <Button variant="filled" color="violet">Course</Button>
                </div>

            </div>
        }/>
        </>
    )
};

export default CourseLink;