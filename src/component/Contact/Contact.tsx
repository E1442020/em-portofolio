import React from "react";
import ContactCard from "./ContactCard";
import { ContactData } from "./ContactData";
import "./ContactStyle.scss";
export default function Contact() {
  return (
    <>
      <div className="contact-container" id="contact">
        <div className="contact-content">
          <div className="title">
            <h2>Get in touch</h2>
            <h4>Talk to me</h4>
          </div>
          <div className="contact-info">
            {ContactData.map((contact) => {
              return (
                <ContactCard
                  icon={<contact.icon size={25} style={{ color: "green" }} />}
                  contactInfo={contact.contactInfo}
                  href={contact.href}
                  key={contact.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
