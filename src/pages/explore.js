import React from 'react';
import styles from '../styles/Explore.module.css';
import { DownOutlined, FireOutlined } from '@ant-design/icons';
import data from '../DummyJson/explore.json';
import { Input } from 'antd';
import Subheader from '../components/Subheader';

const Explore = () => {
    const { people, conversation } = data;
    return (
        <div className={styles.exploreContainer}>
            <div className={styles.header}>
                <Subheader pageTitle={'EXPLORE'} />
                <Input style={{
                    backgroundColor: '#f4f4f4',
                    borderRadius: "0.8em",
                    padding: "0.3em 1em",
                    border: "none",
                    boxShadow:"none",
                }} size="large" placeholder="Find People and Clubs" prefix={<img src="./search.png" width="15px" />}></Input>
            </div>
            <h6>PEOPLE TO FOLLOW</h6>
            <div className={styles.peopleContainer}>
                {people.map(item => (
                    <div>
                        <div className="d-flex align-items-center">
                            <img src="./man.png" alt="" />
                            <div className="ml-2">
                                <h5>{item.title}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <button>Follow</button>
                    </div>
                ))}
                <button className={styles.showMore}>Show more people <DownOutlined /></button>
            </div>
            <h6>FIND CONVERSATIONS ABOUT...</h6>
            <div className="mx-0 row">
                {conversation.map(item => (
                    <div className="col-6 px-2 mb-3">
                        <div className={styles.conversationCard}>
                            <h6><FireOutlined /> {item.title}</h6>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Explore;
