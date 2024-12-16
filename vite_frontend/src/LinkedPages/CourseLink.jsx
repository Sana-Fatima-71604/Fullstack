import DashboardSample from "./DashboardSample.jsx";
import '../Styles/DashboardSample.css';
import { Modal, Button } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import AddingCourses from "../Components/AddingCourses";


function CourseLink () {

    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Courses" size="md" centered>
                <AddingCourses/>
            </Modal>
            <DashboardSample props = {
                <div className="card" style={{margin: "25px", width: "1350px", height: "60px", padding: "50px", paddingBottom:"30px"}}>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <h3>Courses</h3>
                        <Button variant="filled" color="violet" onClick={open}>Course</Button>
                    </div>
                </div>
            }/>

        </>
    )
};

export default CourseLink;