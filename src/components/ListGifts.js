import React from 'react'
import { useState } from 'react/cjs/react.development'
import { GiftsList } from './GiftsList'
import { Modal } from './Modal'
import { NoGifts } from './NoGifts'


export const ListGifts = ({ gifts, setGifts }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleDelete = () => {
        setGifts([])
        localStorage.setItem('lista', [])
    }

    return (
        <>
            {modalOpen && <Modal setOpenModal={setModalOpen} gifts={gifts} setGifts={setGifts} />}
            <div className='list-gifts'>
            <h1 className='title'>Lista de Regalos</h1>
            <button
                className="addButton"
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                AGREGAR REGALO
            </button>
            {gifts.length > 0 ? <GiftsList gifts={gifts} setGifts={setGifts} /> : <NoGifts />}
            <button id='delete-all' className='deleteButton' onClick={ handleDelete }>ELIMINAR TODOS</button>
            </div>
        </>
        
    )
}
