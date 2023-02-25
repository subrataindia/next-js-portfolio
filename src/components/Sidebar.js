import React from "react";
import data from "@/config/constants";
import Image from "next/image";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoIosMail,
  IoMdLocate,
  IoIosArrowDropdownCircle,
} from "react-icons/io";

function Sidebar() {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          {/* <Image
            src="/assets/images/profile.jpg"
            alt={`${data.personal.name}`}
            width={80}
            height={130}
          /> */}
          <img src="./assets/images/profile.jpg" alt="Subrata Das" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            {data.personal.name}
          </h1>

          <div className="profile-tabs">
            <p className="title">Remote React Native Developer</p>
          </div>
          <div style={{ margin: "10px 0px 10px 0px" }}>
            <hr />
          </div>
          <div className="profile-tabs">
            <p className="title">
              React Native, TypeScript, JavaScript, Redux, Mobx, Firebase, Jest,
              SQLite, React, NextJS, Java For Android
            </p>
          </div>
        </div>
        <ul className="social-list">
          <li className="social-item">
            <a
              href={data.personal.github}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoGithub />
            </a>
          </li>
          <li className="social-item">
            <a
              href={data.personal.twitter}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoTwitter />
            </a>
          </li>
          <li className="social-item">
            <a
              href={data.personal.linkedin}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-info">
        <div className="separator mediumscreen-hide smallscreen-hide"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoIosMail />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="#" className="contact-link">
                {data.personal.email}
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <IoMdLocate />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{data.personal.location}</address>
            </div>
          </li>
        </ul>
        <div className="separator  mediumscreen-hide smallscreen-hide"></div>
      </div>
    </aside>
  );
}

export default Sidebar;
