import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/PhoneConfirm.module.css';
import PhoneInput from 'react-phone-number-input';

const PhoneConfirmation = () => {
    const [value, setValue] = useState();
    return (
        <div className={styles.phoneConfirmContainer}>
            <Link exact to="/" className={styles.backBtn}>
                <img src="./back.svg" alt="" />
            </Link>
            <h1>Enter your phone</h1>
            <PhoneInput international defaultCountry="IN" value={value} onChange={setValue} />
            <p>By entering your phone number you agree to our
                 <span> Terms of Service and Privacy Policy.</span> Thanks!
            </p>
            <Link exact to="/codeconfirm" className="primaryBtn d-flex align-items-center">
                Next <img src="./rightwhite.svg" width="20px" alt="" className="ml-1" />
            </Link>
        </div>
    )
}

export default PhoneConfirmation;
