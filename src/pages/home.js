import React from 'react';
import DailyInfoCard from '../components/DailyInfoCard';
import Header from '../components/Header';
import RoomInfoCard from '../components/RoomInfoCard';
import styles from '../styles/Home.module.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsGrid3X3Gap } from 'react-icons/bs';

const Home = () => {
    return (
        <>
            <Header />
            <div className={styles.home_container}>
                <DailyInfoCard />
                <RoomInfoCard />
            </div>
            <div className={styles.action_btn}>
                <button><AiOutlinePlus className="mr-2" />Start a room</button>
                <button><BsGrid3X3Gap /></button>
            </div>
        </>
    )
}

export default Home;
