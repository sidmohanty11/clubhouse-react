import React from 'react'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import styles from '../styles/BottomSheet.module.css';
import StartRoom from './bottom_sheets/StartRoom';

const BottomSheet = (props) => {
    return (
            <SwipeableBottomSheet
                open={props.sheetVisible}
                onChange={() => {
                    props.setSheetVisible(!props.sheetVisible);
                    props.setItemsVisible(true);
                }}
                fullScreen={props.sheetTitle == 'room detail' ? true : false}
            >
            <div className={styles.BottomSheetContainer}
                style={{backgroundColor:props.sheetTitle == 'profile'?'transparent':''}}
            >
                <StartRoom
                    setSheetCreateRoom={props.setSheetCreateRoom}
                    setSheetVisible={(item => {
                        props.setItemsVisible(item);
                        props.setItemsVisible(true);
                    })}
                />
            </div>
            </SwipeableBottomSheet>
    )
}

export default BottomSheet
