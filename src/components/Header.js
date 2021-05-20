import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div className={styles.Header}>
            <Link exact to="/explore">
                <img src="./search.png" alt="" />
            </Link>
            <div className={styles.nav_items}>
                <Link exact to="/friendsinvite">
                    <img src="./invite.svg" alt="" />
                </Link>
                <Link exact to="/upcoming">
                    <img src="./upcoming.svg" alt="" />
                </Link>
                <Link exact to="/activity">
                    <img src="./activity.svg" alt="" />
                </Link>
                <Link exact to="/profile">
                    <img src="./man.png" alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Header;
