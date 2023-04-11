import React from 'react';
import n from './Nav.module.css'
export const Nav = () => {
    return (
        <div className={n.nav}>
            <a>Главная</a>
            <a>Проекты</a>
            <a>Резюме</a>
            <a>Контакты</a>
        </div>
    );
};

