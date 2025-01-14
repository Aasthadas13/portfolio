import React from 'react';
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";

export const Hero = () =>{
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi , I'm Aastha</h1>
        <p className={styles.description}>
        I am an aspiring software developer, passionate about building user-focused applications. I am eager to contribute to dynamic teams and drive innovation. 
        
        Reach out if you'd like to learn more!
        </p>
        <a href="mailto:aasthadas1@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.jpg")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};