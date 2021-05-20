import React from 'react';
import styles from '../styles/DailyInfoCard.module.css';
import data from '../DummyJson/dailycard.json';

const DailyInfoCard = () => {
    return (
        <div className={styles.dailyCard}>
            {data.map((item) => (
                <div>
                    <span className="">{item.time}</span>
                    <div>
                        <span>{item.title}</span>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DailyInfoCard;
