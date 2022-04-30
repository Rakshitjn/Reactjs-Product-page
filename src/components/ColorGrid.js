import React, { Component } from "react";
import styles from "./ColorGrid.module.css";

const data = [
  {
    pos: 1,
    styleName: "Black Strap",
    imageUrl: "https://imgur.com/iOeUBV7.png",
  },
  { pos: 2, styleName: "Red Strap", imageUrl: "https://imgur.com/PTgQlim.png" },
  {
    pos: 3,
    styleName: "Blue Strap",
    imageUrl: "https://imgur.com/Mplj1YR.png",
  },
  {
    pos: 4,
    styleName: "Purple Strap",
    imageUrl: "https://imgur.com/xSIK4M8.png",
  },
];

class ColorGrids extends Component{
  render() {
    const SmallImages = data.map((items) => {
      return (
        <img className={styles.SmallImg} key={items.pos} src={items.imageUrl} alt = ""/>
      );
    });

    return <div>{SmallImages}</div>;
  }
}

export default ColorGrids;
