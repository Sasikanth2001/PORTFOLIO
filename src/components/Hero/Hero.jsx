import React from "react";
import styles from "./Hero.module.css";
import Type from "../../features/Type";
import { RxPinBottom } from "react-icons/rx";

// ✅ Move the PDF and image to "public/assets/hero/" and use direct paths
const resumePDF = "/assets/hero/full stack developer_Sasikanth.pdf";
const profileImage = "/assets/hero/profileImage.png";  // ✅ Correct path for image

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sasikanth</h1>
        <p className={styles.description}>
          <Type />
        </p>

        {/* ✅ Correct way to link and download the PDF */}
        <a href={resumePDF} download="Full-Stack-Developer-Sasikanth" className={styles.contactBtn}>
          <RxPinBottom /> Resume
        </a>

      </div>

      {/* ✅ Using the image stored in "public/assets/hero/" */}
      <img
        src={profileImage}
        alt="Hero image of Sasikanth"
        className={styles.heroImg}
      />
      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
