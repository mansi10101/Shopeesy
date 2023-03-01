import React from 'react';
import styles from '../../stylesheets/Contact.module.css';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Form from './Form';


const Address = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.location}>
        <div className={styles.address}>
          <h2>Get in Touch</h2>
          <h1>Visit one of our agency locations or contact us today</h1>
          <div className={styles.lists}>
            <h2> Head Office</h2>
            <ul>
              <li>
                <BusinessIcon /> &nbsp; Apple Park, Apple Park Way, Cupertino,
                CA, USA
              </li>
              <li>
                <EmailIcon /> &nbsp; mansinagaria01@gmail.com
              </li>
              <li>
                <CallIcon /> &nbsp; 7685674345
              </li>
              <li>
                <AccessTimeIcon /> &nbsp; Monday to Saturday : 9:00am to 16:00pm
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.map_container} >
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22417.72427799253!2d-122.03306483320138!3d37.33065294147492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sin!4v1676707284695!5m2!1sen!2sin'
            className={styles.map}
            allowFullScreen=''
            loading='lazy'
            title='google map'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
      </div>
      <Form/>
    </div>
  );
};

export default Address;
