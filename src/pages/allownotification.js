import React from 'react';
import styles from '../styles/PhoneConfirm.module.css';
import { Link } from 'react-router-dom';

const AllowNotification = () => {
    return (
        <div className={styles.phoneConfirmContainer}>
            <div className="text-center">
                <h1 className="mb-4">Last, important step</h1>
                <h1 className="mb-3">Enable notifications to know when people are talking.</h1>
                <div className={styles.notificationContainer}>
                    <div className="p-3">
                        <h3>"Clubhouse" would like to send you notifications</h3>
                        <p>Notifications may include alerts, sounds and icon badges.</p>
                    </div>
                    <div className={styles.action_btn}>
                        <Link exact to="/home">
                            Don't Allow
                        </Link>
                        <Link exact to="/home">
                            Allow
                        </Link>
                        <img src="./tap.svg" alt="" className={styles.hand_icon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllowNotification;
