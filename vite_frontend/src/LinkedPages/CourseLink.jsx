import DashboardSample from "./DashboardSample.jsx";
import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import AddingCourses from "../Components/AddingCourses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CourseLink({ status }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ToastContainer />
      <Modal opened={opened} onClose={close} title="Courses" centered>
        <AddingCourses onClose={close} />
        {status}
      </Modal>
      <DashboardSample
        props={
          <div
            className="card"
            style={{
              margin: "250px",
              width: "1350px",
              height: "800px",
              padding: "20px",
              display: "flex",
            }}
          >
            <h2>Courses</h2>
            <Button variant="filled" color="violet" onClick={open}>
              Course
            </Button>
          </div>
        }
      />
    </>
  );
}

export default CourseLink;
