import React from "react";
import styles from "./ColorGrid.module.css";

function idfunction (position, displayed_pos){
  if (position === displayed_pos){
    return(styles.active)
  }
  else{
    return(null)
  }
}

const ColorGrids = (props) => {
  return (
    <div>
      <img
        className={styles.SmallImg}
        id={idfunction(props.current,props.active)}
        src={props.ImageUrl}
        alt="Small Images"
        onClick = {props.func}
      />
    </div>
  );
};

export default ColorGrids;
