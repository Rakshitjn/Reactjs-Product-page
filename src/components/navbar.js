import React from "react";
import styles from "./navbar.module.css"

const NavigationBar = () => {
    return(
    <div>
        <nav className = {styles.Navigation}>
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"/>
        </nav>
    </div>
    )
}

export default NavigationBar;