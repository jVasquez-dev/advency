import React from 'react'
import { AddGift } from './AddGift';

export const Modal = ({setOpenModal, gifts, setGifts, active, setActive}) => {
   
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false)
                            setActive({index: "", gift: ""})
                        }}
                    >
                        X
                    </button>
                    
                </div>
                <AddGift gifts={gifts} setGifts={setGifts} setOpenModal={setOpenModal} active = {active} setActive={setActive} />
            </div>
        </div>
    )
}
