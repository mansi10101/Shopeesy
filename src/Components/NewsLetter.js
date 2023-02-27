import React, { Fragment } from 'react'
import styles from "../stylesheets/Footer.module.css"

const NewsLetter = () => {
    return (
        <Fragment>
            <section id={styles.newsletter}>
                <div className={styles.newstext}>
                    <h1>Sign up for Newsletter</h1>
                    <p>Set email updates about our letest shop and <span> Special Offers</span></p>
                </div>
                <div className={styles.submitform} >
                    <input type="text" placeholder='Your Email Address'></input>
                    <button className={styles.nlbtn }>Sign Up</button>
                </div>
            </section>
        </Fragment>
    )
}

export default NewsLetter
