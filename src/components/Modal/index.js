import React from 'react'

import './styles.css'

export const Modal = ({setOpenModal, gifts, setGifts, active, setActive, component: Component}) => {
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
                <Component gifts={gifts} setGifts={setGifts} setOpenModal={setOpenModal} active = {active} setActive={setActive} />
            </div>
        </div>
    )
}
