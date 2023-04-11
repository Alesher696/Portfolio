import React from 'react';
import c from './Content.module.css'
import styles from'../common/styles/container.module.css'
export const Content = () => {
    return (
        <div className={c.content}>
            <div className={styles.container}>
                <div className={c.greeting}>
                    <span>Hello</span>
                    <h1> I'm Aleksandr</h1>
                    <p>A front-end developer</p>
                </div>
                <div className={c.photo}></div>
            </div>

        </div>
    );
};

