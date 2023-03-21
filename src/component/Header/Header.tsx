import { Button, ActionIcon } from "@mantine/core";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { MdWavingHand } from "react-icons/md";
import React from "react";
import "./HeaderStyle.scss";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <h2>
            Eman Masoud <MdWavingHand style={{ color: "orange" }} />
          </h2>
          <h4>Frontend Developer</h4>
          <p>
            High-level experience in web developer and development knowledge,
            Javascript experience.
          </p>
          <a href="#contact">
            {" "}
            <Button color="dark">Contact Me</Button>
          </a>
          <div className="icon-container">
            <ActionIcon color="dark">
              <a
                href="https://www.linkedin.com/in/eman-masoud-a159891a0/"
                target="_blank"
              >
                <AiFillLinkedin size={25} />
              </a>
            </ActionIcon>
            <ActionIcon color="dark">
              <a target="_blank" href="https://github.com/E1442020">
                <AiFillGithub size={25} />
              </a>
            </ActionIcon>
          </div>
        </div>
      </div>
    </>
  );
}
