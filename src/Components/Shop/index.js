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
import ShopCard from '../Shop/ShopCard';

const Shop = () => {
    return (
        <div className={styles.shopbody} >
            <TopBanner/>
            <div className={styles.cards} >
            <ShopCard image={f1} />
            <ShopCard image={f2} />
            <ShopCard image={f11} />
            <ShopCard image={f5} />
            <ShopCard image={f6} />
            <ShopCard image={f7} />
            <ShopCard image={n1} />
            <ShopCard image={n2} />
            <ShopCard image={n3} />
            <ShopCard image={f4} />
            <ShopCard image={f3} />
            <ShopCard image={f13} />
            <ShopCard image={n4} />
            <ShopCard image={n5} />
            <ShopCard image={f14} />
            <ShopCard image={f15} />
            <ShopCard image={f16} />
            <ShopCard image={n6} />
            <ShopCard image={n7} />
            <ShopCard image={n8} />
            <ShopCard image={f1} />
            <ShopCard image={f2} />
            <ShopCard image={f11} />
            <ShopCard image={f5} />
            <ShopCard image={f6} />
            <ShopCard image={f7} />
            <ShopCard image={n1} />
            <ShopCard image={n2} />
            <ShopCard image={n3} />
            <ShopCard image={f4} />
            <ShopCard image={f3} />
            <ShopCard image={f13} />
            <ShopCard image={n4} />
            <ShopCard image={n5} />
            <ShopCard image={f14} />
            <ShopCard image={f15} />
            <ShopCard image={f16} />
            <ShopCard image={n6} />
            <ShopCard image={n7} />
            <ShopCard image={n8} />
            </div>
              
        </div>
    )
}

export default Shop
