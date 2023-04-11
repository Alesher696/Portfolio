import React from 'react';
import c from './Contacts.module.css'
import styles from '../components/common/styles/container.module.css'

export const Contacts = () => {


    return (
        <div className={c.contacts}>

            <div className={`${styles.container} ${c.contactsContainer}`}>
                <h2>Контакты</h2>
                <form className={c.innerContainer}>
                    <input/>
                    <input/>
                    <textarea className={c.textArea}></textarea>
                </form>
                <button>Отправить</button>
            </div>
        </div>
    );
};

