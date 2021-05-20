import React from 'react';
import styles from '../styles/Explore.module.css';
import { Link } from 'react-router-dom';

const Subheader = (props) => {
    return (
        <div className={styles.head}>
            <Link to="/home"><img src="./back.svg" alt="" /></Link>
            <h3>{props.pageTitle}</h3>
        </div>
    )
}

export default Subheader;
