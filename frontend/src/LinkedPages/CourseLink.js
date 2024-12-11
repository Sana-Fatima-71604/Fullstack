import DashboardSample from "../LinkedPages/DashboardSample";
import '../Styles/DashboardSample.css';
import AddingCourses from "../Components/AddingCourses";

function CourseLink () {

    const AddCourse = () => {
        try {console.log(<AddingCourses/>)} catch(error) {console.log(error)}
    }

    return (
        <>
             
            <DashboardSample props = {
            <div className="card" style={{margin: "25px", width: "1350px", height: "60px", padding: "50px", paddingBottom:"30px"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h3>Courses</h3>
                    <button onClick={AddCourse}>Add Courses</button>
                </div>

            </div>
        }/>
        </>
    )
};

export default CourseLink;