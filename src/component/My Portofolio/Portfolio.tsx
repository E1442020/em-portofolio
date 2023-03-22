import React from "react";
import "./PortfolioStyle.scss";
import { Flex, Tabs, Transition } from "@mantine/core";
import { AllProjects } from "./PortfolioData";
import PortofolioCard from "./PortofolioCard";
import console from "console";

export default function Portfolio() {
  const ReactProjects = AllProjects.filter(
    (project) => project.category == "react"
  );
  const JsProjects = AllProjects.filter((project) => project.category == "js");
  const HtmlProjects = AllProjects.filter(
    (project) => project.category == "html"
  );

  return (
    <>
      <div className="portfolio-container" id="portfolio">
        <div className="portfolio-content">
          <h2>My Portfolio</h2>

          <Tabs color="dark" variant="pills" defaultValue="All">
            <Flex justify="center" wrap="wrap" mb="70px" align="center">
              <Tabs.List className="k">
                <Tabs.Tab value="All" fz={20}>
                  All
                </Tabs.Tab>
                <Tabs.Tab value="React" fz={20}>
                  React
                </Tabs.Tab>
                <Tabs.Tab value="Java script" fz={20}>
                  JavaScript
                </Tabs.Tab>
                <Tabs.Tab value="Html/css/sass" fz={20}>
                  HTML & CSS/SASS
                </Tabs.Tab>
              </Tabs.List>
            </Flex>

            <Tabs.Panel value="All" pt="xs">
              <div className="projects">
                {AllProjects.map((project) => {
                  return (
                    <PortofolioCard
                      name={project.name}
                      img={project.img}
                      live={project.live}
                      repo={project.repo}
                      description={project.description}
                      key={project.id}
                    />
                  );
                })}
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="React" pt="xs">
              <div className="projects">
                {ReactProjects.map((project) => {
                  return (
                    <PortofolioCard
                      name={project.name}
                      img={project.img}
                      description={project.description}
                      live={project.live}
                      repo={project.repo}
                      key={project.id}
                    />
                  );
                })}
              </div>{" "}
            </Tabs.Panel>

            <Tabs.Panel value="Java script" pt="xs">
              <div className="projects">
                {JsProjects.map((project) => {
                  return (
                    <PortofolioCard
                      name={project.name}
                      img={project.img}
                      description={project.description}
                      live={project.live}
                      repo={project.repo}
                      key={project.id}
                    />
                  );
                })}
              </div>{" "}
            </Tabs.Panel>
            <Tabs.Panel value="Html/css/sass" pt="xs">
              <div className="projects">
                {HtmlProjects.map((project) => {
                  return (
                    <PortofolioCard
                      name={project.name}
                      img={project.img}
                      description={project.description}
                      live={project.live}
                      repo={project.repo}
                      key={project.id}
                    />
                  );
                })}
              </div>{" "}
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </>
  );
}
