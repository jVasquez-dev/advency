import React from 'react'
import { AddGift } from './AddGift';

export const Modal = ({setOpenModal, gifts, setGifts}) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                    
                </div>
                <AddGift gifts={gifts} setGifts={setGifts} setOpenModal={setOpenModal} />
            </div>
        </div>
    )
}
