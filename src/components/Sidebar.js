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
            <p className="title">React Native Developer</p>
            <a href="#" target="_blank" rel="noopener">
              <p className="title">Download Resume</p>
            </a>
          </div>
        </div>
        <ul className="social-list smallscreen-hide">
          <li className="social-item">
            <a href="#" className="social-link" target="_blank" rel="noopener">
              <IoLogoGithub />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link" target="_blank" rel="noopener">
              <IoLogoTwitter />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link" target="_blank" rel="noopener">
              <IoLogoLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>
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
        <div className="separator"></div>
      </div>
    </aside>
  );
}

export default Sidebar;
