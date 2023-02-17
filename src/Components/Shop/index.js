import React from 'react'
import styles from '../../stylesheets/Shop.module.css'
import TopBanner from '../TopBanner'
import ShopCard from '../Shop/ShopCard';
import {AllProducts} from "../../utils/constants"

const Shop = () => {
    return (
        <div className={styles.shopbody} >
            <TopBanner/>
            <div className={styles.cards} >
               {AllProducts.map((product) => {
                return (
                    <ShopCard key={product.id} product={product} />
                )
               })}
            </div>
              
        </div>
    )
}

export default Shop
