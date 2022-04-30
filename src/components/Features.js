import React, { Component } from "react";
import styles from "./Features.module.css"
class FeaturesButton extends Component{
    render(){
        return(
            <div>
                <button id = {styles.Active} type="button" className = {styles.button}>Time</button>
                <button id = {styles.Inactive} type="button" className = {styles.button}>Heart Rate</button>
            </div>
        )
    }
};

export default FeaturesButton;