import React from "react";
import styles from "./DisplayPicture.module.css";

const BigPicture = () => {
  return (
    <div className = {styles.BigPicture}>
      <img src="https://imgur.com/iOeUBV7.png" alt="Display product" />
    </div>
  );
};

export default BigPicture