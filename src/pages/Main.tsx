import React, { useState } from "react";
import styles from "./Main.module.css";
import image from "../assets/image-jeremy.png";
import iconWork from "../assets/icon-work.svg";
import iconPlay from "../assets/icon-play.svg";

import Card from "../components/Card";

const Main = () => {
  const [textDay, setText] = useState("Daily");

  return (
    <div className={styles.container}>
      <div className={styles.one}>
        <div className={styles.wrapper}>
          <div className={`${styles.text} ${styles.up}`}>
            <img className={styles.images} src={image} alt="jeremy" />
            <p>Report for</p>
            <div className={styles.headText}>
              Jeremy<br></br> Robson
            </div>
          </div>
          <div className={`${styles.text} ${styles.bottom}`}>
            <div className={`${styles.btn} ${textDay === "Daily" ? styles.active : ""}`} onClick={() => setText("Daily")}>Daily</div>
            <div className={`${styles.btn} ${textDay === "Weekly" ? styles.active : ""}`} onClick={() => setText("Weekly")}>Weekly</div>
            <div  className={`${styles.btn} ${textDay === "Monthly" ? styles.active : ""}`} onClick={() => setText("Monthly")}>Monthly</div>
          </div>
        </div>
      </div>
      <Card
        textDay={textDay}
        style={styles.two}
        lw={6}
        hrs={5}
        text={"Work"}
        bg={"orange"}
        icon={iconWork}
      />
      <Card
        textDay={textDay}
        style={styles.three}
        lw={5}
        hrs={7}
        text={"Play"}
        bg={"blue"}
        icon={iconWork}
      />
      <Card
        textDay={textDay}
        style={styles.four}
        lw={8}
        hrs={10}
        text={"Study"}
        bg={"red"}
        icon={iconPlay}
      />
      <Card
        textDay={textDay}
        style={styles.five}
        lw={3}
        hrs={2}
        text={"Exercise"}
        bg={"green"}
        icon={iconPlay}
      />
      <Card
        textDay={textDay}
        style={styles.six}
        lw={8}
        hrs={10}
        text={"Social"}
        bg={"purple"}
        icon={iconPlay}
      />
      <Card
        textDay={textDay}
         style={styles.seven}
        lw={8}
        hrs={10}
        text={"Self care"}
        bg={"yellow"}
        icon={iconPlay}
      />
    </div>
  );
};

export default Main;
