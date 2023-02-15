import React, { Fragment } from 'react'
import styles from '../stylesheets/Shop.module.css'
import image from '../assets/img/banner/b1.jpg'


const TopBanner = () => {
    return (
        <Fragment>
            <section id={styles.mbanner} className={styles.section_m1} style={{backgroundImage: `url(${image})`, marginTop:"100px", minHeight:"50vh"}}>
            <h1 className={styles.btext2} style={{fontFamily:"cursive"}}> <span> #</span>shopOnline</h1>
                <h2 className={styles.btext1} > Save more with coupons & upto 70% off</h2>
            </section>
        </Fragment>
    )
}

export default TopBanner
