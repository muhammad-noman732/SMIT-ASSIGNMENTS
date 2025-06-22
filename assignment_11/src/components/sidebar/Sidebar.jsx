import React from "react";
import myAvtar from "../../assets/my-avatar.png";
import ContactIcon from "../contactIcon/ContactIcon";
import {
  FaEnvelope,
  FaPhone,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLocationArrow,
  FaFacebook, 
  FaTwitter, 
  FaInstagram
} from "react-icons/fa";
const SideBar = () => {
  return (
    <aside className="sidebar" data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={myAvtar} alt="Richard hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Richard hanrick
          </h1>

          <p className="title">Web developer</p>
        </div>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
        <ContactIcon 
            icon={FaEnvelope} 
            title="Email" 
            link="mailto:richard@example.com" 
            text="richard@example.com" 
          />
          <ContactIcon 
            icon={FaPhone} 
            title="Phone" 
            link="tel:+12133522795" 
            text="+1 (213) 352-2795" 
          />
          <ContactIcon 
            icon={FaCalendarAlt} 
            title="Birthday" 
            datetime="1982-06-23" 
            text="June 23, 1982" 
          />
          <ContactIcon 
            icon={FaMapMarkerAlt} 
            title="Location" 
            address="Sacramento, California, USA" 
            text="Sacramento, California, USA" 
          />
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
            <FaFacebook/>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
            <FaInstagram />
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <FaTwitter/>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
