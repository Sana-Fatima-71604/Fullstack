import DashboardSample from "./DashboardSample.jsx";
import { Modal, Button } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import AddingCourses from "../Components/AddingCourses";


function CourseLink () {

    const [opened, {open, close}] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Courses" centered>
                <AddingCourses/>
            </Modal>
            <DashboardSample props = {
                <div className="card" style={{margin: "25px", width: "1350px", height: "100px", padding: "20px"}}>
                    <div width="1200px" display="flex">
                        <h3>Courses</h3>
                        <Button variant="filled" color="violet" onClick={open}>Course</Button>
                    </div>
                </div>
            }/>
        </>
    )
};

export default CourseLink;