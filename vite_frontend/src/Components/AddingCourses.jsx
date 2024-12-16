import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Text, TextInput, NativeSelect } from "@mantine/core";

function AddingCourses() {

    const [currentName, updateName] = useState("")
    const [currentLevel, updateLevel] = useState("")
    const [currentHours, updateHours] = useState("")
    const [currentStatus, updateStatus] = useState("")

    const submitCourse = async (event) => {

        event.preventDefault()

        const course = {
            name: currentName,
            level: currentLevel,
            status: currentStatus,
            hours: currentHours
        }

        console.log(course)
    
        try {
            const response = await axios.post(
                "http://localhost:4000/api/course/add", course
            )
            if (response.status === 201) {
                toast(response.data.message)
            }
        } catch (error) {
                console.log(error)
        }
    }

    return (
    <>
        <form onSubmit={submitCourse}>
            <Text size="md">Course Name: </Text>
            <TextInput
            type="text"
                placeholder="Enter course name"
                size="md"
                value={currentName}
                onChange={(e) => {updateName(e.target.value)}}
            />
            <Text size="md">Level: </Text>
            <NativeSelect
            type="text"
                mt="md"
                value={currentLevel}
                data={['Beginner', 'Intermediate', 'Experienced', 'Professional']}
                onChange={(e) => {updateLevel(e.target.value)}}
            />
            <Text size="md">Hours: </Text>
            <TextInput
            type="text"
                placeholder="Enter the number of hours"
                value={currentHours}
                size="md"
                onChange={(e) => {updateHours(e.target.value)}}
            />
            <Text size="md">Status: </Text>
            <TextInput
            type="text"
                placeholder="Enter status"
                value={currentStatus}
                size="md"
                onChange={(e) => {updateStatus(e.target.value)}}
            />
{/*     
            <input type="submit" value="submit"></input> */}
            <Button variant="filled" type="submit">
                Submit
            </Button>
            <ToastContainer/>
        </form>

    </>
    )
}

export default AddingCourses;