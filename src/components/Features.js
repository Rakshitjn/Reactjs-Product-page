import React, { Component } from "react";
import styles from "./Features.module.css";

class FeaturesButton extends Component {
  state = {
    activebtn: true,
  };

  Featureshow = () => {
    if (this.state.activebtn === true) {
      const today = new Date();
      return (
        <h1 className={styles.mount} id={styles.Time}>
          {today.getHours() + ":" + today.getMinutes()}
        </h1>
      );
    } else {
      return (
        <div>
        <img
          className={styles.mount}
          id={styles.Heart}
          alt=""
          src="https://cdn.pixabay.com/photo/2019/08/03/16/16/red-4382111_1280.png"
        />
        <h2 id = {styles.Hearttext} className = {styles.mount}>78</h2>
        </div>
      );
    }
  };

  Featurebtn = () => {
    this.setState((prevSatate) => {
      return { activebtn: !prevSatate.activebtn };
    });
  };

  render() {
    return (
      <div>
        <button
          id={this.state.activebtn ? styles.Active : styles.Inactive}
          type="button"
          className={styles.button}
          onClick={this.state.activebtn ? null : this.Featurebtn}
        >
          Time
        </button>
        <button
          id={this.state.activebtn ? styles.Inactive : styles.Active}
          type="button"
          className={styles.button}
          onClick={this.state.activebtn ? this.Featurebtn : null}
        >
          Heart Rate
        </button>
        <this.Featureshow />
      </div>
    );
  }
}

export default FeaturesButton;
