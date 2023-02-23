import React from 'react'
import image from '../../assets/img/banner/b2.jpg'
import styles from '../../stylesheets/Home.module.css'
import { motion } from 'framer-motion'
import { useCartContext } from '../../context/cart_context'

const MiddleBanner = () => {
    const {ani_content} = useCartContext();
  return (
    <motion.div variants={ani_content}>
            <section id={styles.mbanner} className={styles.section_m1} style={{backgroundImage: `url(${image})` }}>
                <h2 className={styles.btext1} > Repair Services</h2>
                <h1 className={styles.btext2} > Up to <span> 70% off</span> - All T-shirts and Accessories</h1>
                <button className={styles.bbutton} >
                    Explore More
                </button>
            </section>
        </motion.div>
    )
}

export default MiddleBanner
