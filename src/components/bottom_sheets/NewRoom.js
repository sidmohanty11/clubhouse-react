import React, { useState } from 'react';
import styles from '../../styles/RoomDetail.module.css';
import { AiOutlineFile, AiOutlinePlus } from 'react-icons/ai';
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs';

const NewRoom = (props) => {
    const [micMuteVisible, setMicMuteVisible] = useState(false);
    const [itemsVisible, setItemsVisible] = useState(true);
    const card = props.cardDetail;
    return (
        <>
            <div className={styles.roomDetailContainer}>
                <div className={styles.head}>
                    <div className="d-flex align-items-center">
                        <a href="" onClick={() => {
                            props.setSheetVisible(false);
                        }} >
                            <img src="./down.svg" alt="" className={styles.arrow_icon} />
                        </a>
                        <span>Hallway</span>
                    </div>
                    <div>
                        <AiOutlineFile />
                        <img src="./man.png" alt="" className={styles.profile_img} />
                    </div>
                </div>
                <div className={styles.roomDetailCard}>
                    <div style={{ padding:"0.5em 1em" }}
                        className="d-flex align-items-center justify-content-between flex-wrap">
                        {card.members.map((item) => (
                            <div className={styles.memberContainer}>
                                {micMuteVisible ? (
                                    <div className={styles.audio_icon}>
                                        <BsMicMuteFill />
                                    </div>
                                ) : (" ")}
                                <img src="./man.png" alt="" />
                                <p>
                                    <span>*</span>
                                    {item.first_name}
                                </p>
                                </div>
                            ))}
                    </div>
                </div>
                <div className={styles.footer}>
                    <button onClick={() => {
                        props.setSheetVisible(false);
                    }}>
                        Leave Quietly<img src="./handpeace.svg" alt="" />
                    </button>
                    <div>
                        <button>
                            <AiOutlinePlus />
                        </button>
                        <button>
                            <img src="./stop.svg" />
                        </button>
                        <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
                            {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewRoom;
