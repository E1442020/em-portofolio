import React from "react";
import "./ContactStyle.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Flex } from "@mantine/core";
export default function ContactCard(props: any) {
  return (
    <div className="card-container">
      <p>{props.icon}</p>
      <p>{props.contactInfo}</p>
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
          <Flex className="writeMe" align='center' gap='4px'><p>Write Me</p>  <AiOutlineArrowRight /></Flex>
         
        
      </a>
    </div>
  );
}
