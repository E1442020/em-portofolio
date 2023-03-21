import React from "react";
import SkillsCard from "./SkillsCard";
import { SkillsData1, SkillsData2 } from "./SkillsData";
import "./SkillsStyle.scss";
export default function Skills() {
  return (
    <>
      <div className="skillsContainer" id="skills">
        <div className="skillsContent">
          <h2>Skills</h2>
          <h4>Front end Developer</h4>

          <div className="skills">
            <div className="skillsCard-content">
              {SkillsData1.map((skill1) => {
                return <SkillsCard name={skill1.name} key={skill1.id} />;
              })}
            </div>

            <div className="skillsCard-content">
              {SkillsData2.map((skill2) => {
                return <SkillsCard name={skill2.name} key={skill2.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
