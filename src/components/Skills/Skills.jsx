import React from "react";
import styles from "./Skills.module.css";
import skills from "../Data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div><img src={getImageUrl("about/skillsImage.png")} alt="Me sitting with a laptop" className={styles.skillsImage}/>
        </div>
        <div className={styles.skills}>
          {skills.map((skill,id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img className={styles.size} src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}