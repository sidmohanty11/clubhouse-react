import React from 'react';
import exploreStyles from '../styles/Explore.module.css';
import styles from '../styles/Profile.module.css';
import roomStyles from '../styles/RoomDetail.module.css';
import { Link } from 'react-router-dom';
import { BsAt, BsUpload, BsPlus } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai';

const Profile = () => {
    return (
        <>
            <div className={styles.profileContainer}>
                <div className={exploreStyles.header}>
                    <div className={`${exploreStyles.head} text-end mb-0`}>
                        <Link to="/home">
                            <img src="/back.svg" alt="" className={roomStyles.arrow_icon}/>
                        </Link>
                        <div className={styles.actionBtn}>
                            <BsAt />
                            <BsUpload />
                            <AiOutlineSetting />
                        </div>
                    </div>
                </div>
                <img src="/man.png" className={styles.profile_image} />
                <h4>Sidharth Mohanty</h4>
                <p>@sidmohanty_11</p>
                <div className={styles.follow}>
                    <p><span>1635</span> followers</p>
                    <p><span>294</span> following</p>
                </div>
                    <button>Add a bio</button>
                    <div className="mb-4">
                        <button className="mb-0">
                        <AiOutlineTwitter /> Add Twitter
                        </button>
                        <button className="mb-0">
                            <AiOutlineInstagram /> Add Instagram
                        </button>
                    </div>
                    <div className={styles.nominated}>
                        <img src="./man.png" alt="" />
                        <div>
                            <p>Joined 10-March-2019</p>
                            <p>Nominated by <span>Rafeh Qazi</span></p>
                        </div>
                    </div>
                    <p>Member of</p>
                    <button className={styles.addMemberBtn}><BsPlus /></button>
            </div>
        </>
    )
}

export default Profile;
