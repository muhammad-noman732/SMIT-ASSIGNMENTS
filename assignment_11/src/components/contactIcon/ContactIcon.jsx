import React from 'react'

const ContactIcon = ({ icon: Icon, title, link, text, datetime, address, isSocial, size = 20, className}) => {
  return (
    <div>
         <li className="contact-item">
                    <div className="icon-box">
                    <Icon className="icon"/>
                    </div>
                    <div className="contact-info">
                      <p className="contact-title">{title}</p>
                      <a href={link} className="contact-link">
                       {text}
                      </a>
                    </div>
                  </li>
        
      
    </div>
  )
}

export default ContactIcon
