import React from 'react'
import styles from "../stylesheets/Cart.module.css"

const EmptyDiv = ({text}) => {
    return (
        <div className= {styles.emptydiv}>
            <h3> {text} </h3>
        </div>
    )
}

export default EmptyDiv
