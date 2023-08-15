import React from "react";
import "./AboutMeStyle.scss";
import { data } from "./AboutMeData";
import DataCard from "./DataCard";
import { Button } from "@mantine/core";
export default function AboutMe() {
  return (
    <>
      <div className="about-container" id="about">
        <div className="about-content">
          <h2>About Me</h2>
          <h3>
            My name is Eman Masoud, a Frontend developer; with extensive
            knowledge and experience in web development and learning new
            technologies; my favorite language is javascript. I create web pages
            with UI / UX user interface .
          </h3>
          <div className="cards-container">
            {data.map((item) => {
              return (
                <DataCard
                  icon={item.icon}
                  name={item.name}
                  number={item.number}
                  key={item.id}
                />
              );
            })}
          </div>
          <a
            href="https://drive.google.com/file/d/1GDL5627SHs9YuHas3NuMYVicZxzDsU1e/view"
            download=" My Cv"
            target="_blank"
          >
            {" "}
            <Button color="dark">Download Cv</Button>
          </a>
        </div>
      </div>
    </>
  );
}
