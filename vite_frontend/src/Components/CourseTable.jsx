import Testschedule from "../Components/Testschedule";
import Card from "../Components/Card";
import { Table } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";

function CourseTable({ props }) {
  const tableTitles = ["Course Name", "Level", "Date", "Status"];

  const [courses, setCourse] = useState([]);

  useEffect(() => {
    const tab = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/course/");

        // console.log(response.data)
        setCourse(response.data);
        // console.log(courses)
      } catch (error) {
        console.log(error);
      }
    };
    tab();
  }, []);

  return (
    props || (
      <div className="div main-content">
        <div className="div main-content-main">
          <p>WELCOME BACK</p>
          <div id="section1" className="div">
            <div className="div my-0">
              <Card title="Current Courses" count="2" color="yellow" />
              <Card title="Completed Courses" count="5" color="green" />
              <Card title="Interested Courses" count="10" color="blue" />
            </div>
            <br />
            <div className="div card" id="card4">
              <p
                style={{
                  fontSize: "30px",
                  lineHeight: "1",
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  marginBottom: "15px",
                }}
              >
                My Courses
                <a href="/signin" style={{ fontSize: "20px" }}>
                  See all
                </a>
              </p>
              <br />
              <Table horizontalSpacing="xl">
                <Table.Thead>
                  <Table.Tr style={{ color: "grey" }}>
                    {tableTitles.map((tr, index) => {
                      return <Table.Th key={index}>{tr}</Table.Th>;
                    })}
                  </Table.Tr>
                </Table.Thead>

                <Table.Tbody>
                  {courses.map((table, index) => {
                    const { name, level, hours, status } = table || {};
                    return (
                      <Table.Tr key={index}>
                        <Table.Th style={{ fontWeight: "normal" }}>
                          <i
                            className="fa fa-cloud"
                            style={{ padding: "0px", fontSize: "20px" }}
                          ></i>
                          <p style={{ padding: "0px", margin: "0px" }}>
                            {name}
                          </p>
                          <p>10 lessons</p>
                        </Table.Th>
                        <Table.Th style={{ fontWeight: "normal" }}>
                          {level}
                        </Table.Th>
                        <Table.Th style={{ fontWeight: "normal" }}>
                          {hours}
                        </Table.Th>
                        <Table.Th>
                          <button
                            style={{
                              borderRadius: "10px",
                              fontWeight: "bold",
                            }}
                          >
                            {status}
                          </button>
                        </Table.Th>
                      </Table.Tr>
                    );
                  })}
                </Table.Tbody>
              </Table>
            </div>
          </div>
        </div>

        <Testschedule />
      </div>
    )
  );
}

export default CourseTable;
