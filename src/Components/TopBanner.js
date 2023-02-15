import React, { Fragment } from 'react'
import styles from '../stylesheets/Shop.module.css'
import image from '../assets/img/banner/b1.jpg'

const TopBanner = () => {
    return (
        <Fragment>
            <section id={styles.bgimage}>
            <img className={styles.bgimage} src={image} />
            
            </section>
        </Fragment>
    )
}

export default TopBanner
