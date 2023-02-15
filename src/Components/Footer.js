import React, { Fragment } from 'react';
import styles from "../stylesheets/Footer.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Fragment>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.footer_col}>
              <h4>company</h4>
              <ul>
                <li>
                  <a href='#'>about us</a>
                </li>
                <li>
                  <a href='#'>our services</a>
                </li>
                <li>
                  <a href='#'>privacy policy</a>
                </li>
                <li>
                  <a href='#'>affiliate program</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer_col}>
              <h4>get help</h4>
              <ul>
                <li>
                  <a href='#'>FAQ</a>
                </li>
                <li>
                  <a href='#'>shipping</a>
                </li>
                <li>
                  <a href='#'>returns</a>
                </li>
                <li>
                  <a href='#'>order status</a>
                </li>
                <li>
                  <a href='#'>payment options</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer_col}>
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href='#'>watch</a>
                </li>
                <li>
                  <a href='#'>bag</a>
                </li>
                <li>
                  <a href='#'>shoes</a>
                </li>
                <li>
                  <a href='#'>dress</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer_col}>
              <h4>follow us</h4>
              <div className={styles.social_links}>
                <a href='#'>
                  <FacebookIcon fontSize='large'/>
                </a>
                <a href='#'>
                 <TwitterIcon fontSize='large'/>
                </a>
                <a href='#'>
                  <InstagramIcon fontSize='large'/>
                </a>
                <a href='#'>
                  <LinkedInIcon fontSize='large'/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
