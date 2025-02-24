import React from "react";

import styles from "./Hero.module.css";
import Type from "../../features/Type";
import { RxPinBottom } from "react-icons/rx";

export const Hero = () => {
  return (

    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sasikanth</h1>
        <p className={styles.description}>
          <Type />
        </p>
     
        <a href='https://drive.google.com/uc?export=view&id=1I0TWCPmN__vfBfWBU8vY0BMXOc-qA8WU' className={styles.contactBtn} target="_blank"
          download='Sasikanth' >
          <RxPinBottom />  Resume
        </a>
      
          </div>
          <img
              src='https://drive.google.com/uc?export=view&id=13mKwn8WrDwewDahSRVjbVCu6O4FT4O0V'
              alt="My image"
              className={styles.heroImg}
          />
     <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

    </section>
  );
};
