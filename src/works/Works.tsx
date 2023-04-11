import React from 'react';
import w from './Works.module.css'
import {Project} from "./Project";
import styles from'../components/common/styles/container.module.css'

export const Works = () => {
    return (
        <div className={w.works}>
            <div className={`${styles.container} ${w.worksContainer}`}>
                <h2>Мои Работы</h2>
                <div className={w.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>

        </div>
    );
};

