import React from 'react';
import w from './Works.module.css'

export const Project = () => {

    return (
        <div className={w.project}>
            <div className={''}>
                <div className={w.img}>
                    <img/>
                    <div className={w.button}><button>Смотреть</button></div>
                </div>

                <div className={w.description}>
                    <div className={''}>Название проекта</div>
                    <div className={''}>Краткое описание</div>
                </div>
            </div>
        </div>
    );
};

