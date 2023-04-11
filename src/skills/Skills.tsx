import React from 'react';
import s from './Skills.module.css'
import styles from '../components/common/styles/container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsContent}>
            <div className={`${styles.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
            <div className={s.skills}>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>

            </div>
        </div>
    );
};

