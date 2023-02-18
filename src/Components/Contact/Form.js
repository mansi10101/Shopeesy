import React from 'react';
import styles from '../../stylesheets/Contact.module.css';
import p1 from '../../assets/img/people/1.png';
import p2 from '../../assets/img/people/2.png';
import p3 from '../../assets/img/people/3.png';

const Form = () => {
  return (
    <div className={styles.form_container}>
      <div className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.info}>
            <h2>LEAVE A MESSAGE!</h2>
            <h1> We love to here from you:)</h1>
            <form action='' method='POST' className={styles.contact_input}>
              <input
                type='text'
                placeholder='Your Name'
                name='Your Name'
                required
                autoComplete='off'
              />
              <input
                type='email'
                name='Email'
                placeholder='Your email here'
                autoComplete='off'
                required
              />
              <textarea
                type='text'
                name='Message'
                cols='30'
                rows='10'
                placeholder='Enter your message'
                autoComplete='off'
                required
              ></textarea>

              <input type='submit' value='Send' />
            </form>
          </div>
          <div className={styles.people}>
            <div className={styles.card}>
              <div className={styles.people_img}>
                <img src={p1} alt=""/>
              </div>
              <div className={styles.people_details}>
                <h2>John Doe</h2>
                <h3>Senior Marketing Manager</h3>
                <h3>Phone: +000 123 000 88 77</h3>
                <h3>Email: john123@gmail.com</h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.people_img}>
                <img src={p2} alt=""/>
              </div>
              <div className={styles.people_details}>
                <h2>Saich Smith</h2>
                <h3>Senior Marketing Manager</h3>
                <h3>Phone: +000 123 000 88 77</h3>
                <h3>Email: saich123@gmail.com</h3>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.people_img}>
                <img src={p3} alt="" />
              </div>
              <div className={styles.people_details}>
                <h2>Emma Stone</h2>
                <h3>Senior Marketing Manager</h3>
                <h3>Phone: +000 123 000 88 77</h3>
                <h3>Email: emma123@gmail.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
