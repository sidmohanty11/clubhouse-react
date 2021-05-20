import React from 'react';
import styles from '../styles/RoomCard.module.css';
import data from '../DummyJson/roomcard.json';
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs';

const RoomInfoCard = (props) => {
    return (
        <>
            {data.map((item) => (
                <div>
                    <div>
                        <div className={styles.roomCardContainer}>
                            <h6>{item.title}</h6>
                            <h2>{item.sub_title}</h2>
                            <div className={styles.roomMembers}>
                                <div>
                                    <img src="./man.png" alt="" />
                                    <img src="./girl.svg" alt="" />
                                </div>
                                <div>
                                    {item.members.map((person) => (
                                        <p>
                                            {person.first_name} {person.last_name}<BsChatDots />
                                        </p>
                                    ))}
                                    <p className="d-flex align-items-center">
                                        <span className="mr-2">1.8K</span>
                                        <BsFillPersonFill />
                                        <span className="mx-2"></span>{" "}
                                        <span className="mx-2">5</span><BsChatDotsFill />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default RoomInfoCard;
