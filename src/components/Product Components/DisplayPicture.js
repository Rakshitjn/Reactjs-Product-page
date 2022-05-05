import React from "react";
import styles from "./DisplayPicture.module.css";

const BigPicture = (props) => {
  return (
    <div className={styles.BigPicture}>
      <img
        src={props.ImageUrl}
        alt="Display product"
      />
    </div>
  );
};

export default BigPicture;
