import React from 'react';
import styles from '../styles/Welcome.module.css';
import { Link } from 'react-router-dom';

export default function Welcome() {
    return <div className={styles.WelcomeContainer}>
        <h1>Welcome to The Clubhouse!</h1>
        <div className={styles.WelcomeInfo}>
            <p>We're working hard to get clubhouse ready for everyon! While we wrap up the finishing touches, we're adding people gradually to make sure nothing breaks!</p>
            <p>Anyone can join with an invite from an existing user or reserve your username and we'll text you if you have a friend on the app who can let you in. So basically its a bar with hot chicks!</p>
            <p>Sid, Rafeh & the Clubhouse team</p>
        </div>
        <div className={styles.actionBtn}>
            <Link exact to="/get_username" className={"primaryBtn d-flex align-items-center mb-3"}>
                Get your username{" "}
                <img src="" alt="" />
            </Link>
            <Link to="/signin"> Have an invite in? Sign in.
            </Link>
        </div>
    </div>
}