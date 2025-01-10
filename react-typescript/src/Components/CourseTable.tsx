import { Card, Table } from "@mantine/core";
import { useState, useEffect } from "react";
import axios from "axios";

const CourseTable: React.FC = () => {
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
    <>
      <Card shadow="sm" padding="lg" radius="md" m="80px" withBorder>
        <Card.Section>
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
                      <p style={{ padding: "0px", margin: "0px" }}>{name}</p>
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
        </Card.Section>
      </Card>
    </>
  );
};

export default CourseTable;
