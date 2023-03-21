import React from "react";
import { Timeline, Text } from "@mantine/core";
import "./EducationStyle.scss";
export default function Education() {
  return (
    <>
      <div className="edu-container" id="education">
        <div className="edu-content"><h2>Education</h2>
        <Timeline color="gray" active={2}>
          <Timeline.Item title="Faculty of Engineering">
            <Text color="dimmed" size="sm">
              Graduated from System and Computers Department
            </Text>
            <Text size="xs" mt={4}>
              2018-2022
            </Text>
          </Timeline.Item>

          <Timeline.Item title="JavaScript">
            <Text color="dimmed" size="sm">
              Elzero complete Courses
            </Text>
            <Text size="xs" mt={4}>
              2021
            </Text>
          </Timeline.Item>

          <Timeline.Item title="React - The Complete Guide">
            <Text color="dimmed" size="sm">
              (Maximilian Schwarzmüller) Udemy Courses
            </Text>
            <Text size="xs" mt={4}>
              2022
            </Text>
          </Timeline.Item>
        </Timeline></div>
        
      </div>
    </>
  );
}
