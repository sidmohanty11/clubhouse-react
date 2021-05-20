import React from 'react';
import DailyInfoCard from '../components/DailyInfoCard';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <>
            <Header />
            <div className={styles.home_container}>
            <DailyInfoCard />
            </div>
        </>
    )
}

export default Home;
