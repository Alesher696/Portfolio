import React from 'react';
import f from './Footer.module.css'
import styles from '../components/common/styles/container.module.css'
import {FooterItem} from "./FooterItems";

export const Footer = () => {
    return (
        <div className={f.footer}>
            <div className={`${styles.container} ${f.footerContainer}`}>
                <h2> Александр Шерстнёв</h2>
                <div className={f.footerItems}>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                </div>
                <div>© 2023 Все права защищены</div>
            </div>
        </div>
    );
};

