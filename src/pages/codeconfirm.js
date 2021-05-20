import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/PhoneConfirm.module.css';

const CodeConfirm = () => {
    return (
        <div className={styles.phoneConfirmContainer}>
            <Link exact to="/invite" className={styles.backBtn}>
                <img src="./back.svg" alt="" /> 
            </Link>
            <div className="text-center">
                <h1 style={{width: '100%', maxWidth:"200px", marginBottom:"1em"}}>Enter the code that is sent to you!</h1>
                <input type="text" style={{width: '100%',border:"none", textAlign:"center", outline:"none"}} />
                <p className="mt-2">Didn't receive it? <span>Tap to resend</span>
                </p>
            </div>
            <Link exact to="/allownotification" className="primaryBtn d-flex align-items-center">
                Next<img src="./rightwhite.svg" width="20px" alt="" />
            </Link>
        </div>
    )
}

export default CodeConfirm;
