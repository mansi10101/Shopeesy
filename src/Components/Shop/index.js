import React from 'react'
import styles from '../../stylesheets/Shop.module.css'
import TopBanner from '../TopBanner'
import f1 from '../../assets/img/products/f1.jpg';
import f2 from '../../assets/img/products/f2.jpg';
import f3 from '../../assets/img/products/f3.jpg';
import f4 from '../../assets/img/products/f4.jpg';
import f5 from '../../assets/img/products/f5.jpg';
import f6 from '../../assets/img/products/f6.jpg';
import f7 from '../../assets/img/products/f7.jpg';
import f11 from '../../assets/img/products/f11.jpg';
import f13 from '../../assets/img/products/f13.jpg';
import f14 from '../../assets/img/products/f14.jpg';
import f15 from '../../assets/img/products/f15.jpg';
import f16 from '../../assets/img/products/f16.jpg';
import n1 from "../../assets/img/products/n1.jpg";
import n2 from "../../assets/img/products/n2.jpg";
import n3 from "../../assets/img/products/n3.jpg";
import n4 from "../../assets/img/products/n4.jpg";
import n5 from "../../assets/img/products/n5.jpg";
import n6 from "../../assets/img/products/n6.jpg";
import n7 from "../../assets/img/products/n7.jpg";
import n8 from "../../assets/img/products/n8.jpg";

import Card from '../Home/Card';

const Shop = () => {
    return (
        <div className={styles.shopbody} >
            <TopBanner/>
            <div className={styles.cards} style={{padding:"5% 10%"}}>
            <Card image={f1} />
            <Card image={f2} />
            <Card image={f11} />
            <Card image={f5} />
            <Card image={f6} />
            <Card image={f7} />
            <Card image={n1} />
            <Card image={n2} />
            <Card image={n3} />
            <Card image={f4} />
            <Card image={f3} />
            <Card image={f13} />
            <Card image={n4} />
            <Card image={n5} />
            <Card image={f14} />
            <Card image={f15} />
            <Card image={f16} />
            <Card image={n6} />
            <Card image={n7} />
            <Card image={n8} />
            <Card image={f1} />
            <Card image={f2} />
            <Card image={f11} />
            <Card image={f5} />
            <Card image={f6} />
            <Card image={f7} />
            <Card image={n1} />
            <Card image={n2} />
            <Card image={n3} />
            <Card image={f4} />
            <Card image={f3} />
            <Card image={f13} />
            <Card image={n4} />
            <Card image={n5} />
            <Card image={f14} />
            <Card image={f15} />
            <Card image={f16} />
            <Card image={n6} />
            <Card image={n7} />
            <Card image={n8} />
            </div>
              
        </div>
    )
}

export default Shop
