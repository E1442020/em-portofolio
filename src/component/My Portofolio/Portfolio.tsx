import React from "react";
import "./PortfolioStyle.scss";
import { Flex, Tabs } from "@mantine/core";
import {
  AllProjects,
  HtmlProjects,
  JsProjects,
  ReactProjects,
} from "./PortfolioData";
import PortofolioCard from "./PortofolioCard";

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-container" id="portfolio">
        <div className="portfolio-content">
          <h2>My Portofolio</h2>

          <Tabs color="dark" variant="pills" defaultValue="All">
            <Flex justify='center'  mb='70px'>
            <Tabs.List >
              <Tabs.Tab value="All" fz={14} p='3px'>All</Tabs.Tab>
              <Tabs.Tab value="React" fz={14} p='3px'>React</Tabs.Tab>
              <Tabs.Tab value="Java script" fz={14} p='3px'>Java script</Tabs.Tab>
              <Tabs.Tab value="Html/css/sass" fz={14} p='3px'>Html/css/sass</Tabs.Tab>
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
