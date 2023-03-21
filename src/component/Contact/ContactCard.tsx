import React from "react";
import "./ContactStyle.scss";
import { AiOutlineArrowRight } from "react-icons/ai";
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
        <p className="writeMe">
          Write Me <AiOutlineArrowRight />
        </p>
      </a>
    </div>
  );
}
