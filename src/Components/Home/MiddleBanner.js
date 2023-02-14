import React, { Fragment } from 'react'
import image from '../../assets/img/banner/b2.jpg'
import styles from '../../stylesheets/Home.module.css'

const MiddleBanner = () => {
    return (
        <Fragment>
            <section id={styles.mbanner} className={styles.section_m1} style={{backgroundImage: `url(${image})` }}>
                <h2 className={styles.btext1} > Repair Services</h2>
                <h1 className={styles.btext2} > Up to <span> 70% off</span> - All T-shirts and Accessories</h1>
                <button className={styles.bbutton} >
                    Explore More
                </button>
            </section>
        </Fragment>
    )
}

export default MiddleBanner
