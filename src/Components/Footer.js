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
                  <p >about us</p>
                </li>
                <li>
                  <p >our services</p>
                </li>
                <li>
                  <p >privacy policy</p>
                </li>
                <li>
                  <p >affiliate program</p>
                </li>
              </ul>
            </div>
            <div className={styles.footer_col}>
              <h4>get help</h4>
              <ul>
                <li>
                  <p >FAQ</p>
                </li>
                <li>
                  <p >shipping</p>
                </li>
                <li>
                  <p >returns</p>
                </li>
                <li>
                  <p>order status</p>
                </li>
                <li>
                  <p >payment options</p>
                </li>
              </ul>
            </div>
            <div className={styles.footer_col}>
              <h4>online shop</h4>
              <ul>
                <li>
                  <p >watch</p>
                </li>
                <li>
                  <p >bag</p>
                </li>
                <li>
                  <p >shoes</p>
                </li>
                <li>
                  <p >dress</p>
                </li>
              </ul>
            </div>
            <div className={styles.footer_col}>
              <h4>follow us</h4>
              <div className={styles.social_links}>
                <p >
                  <FacebookIcon fontSize='large'/>
                </p>
                <p >
                 <TwitterIcon fontSize='large'/>
                </p>
                <p >
                  <InstagramIcon fontSize='large'/>
                </p>
                <p >
                  <LinkedInIcon fontSize='large'/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
