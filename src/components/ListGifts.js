import React from 'react'
import { useState} from 'react/cjs/react.development'
import { GiftsList } from './GiftsList'
import { Modal } from './Modal'
import { NoGifts } from './NoGifts'


export const ListGifts = ({ gifts, setGifts , active, setActive}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleDelete = () => {
        setGifts([])
    }

    const handleTotal = () => {
        const reducer = (acum, current) => {
            return acum + current.qty * current.price
        }
        const sum = gifts.reduce(reducer, 0)
        return sum
    }

    return (
        <>
            { 
                modalOpen && 
                <Modal 
                    setOpenModal={setModalOpen} 
                    gifts={gifts} 
                    setGifts={setGifts}
                    active = {active} 
                    setActive={setActive}  
                />
            }
            <div className='list-gifts'>
                <h1 className='title'>Lista de Regalos</h1>
                <button
                    className="addButton"
                    autoFocus
                    onClick={() => {
                        setModalOpen(true);
                    }}
                >
                    AGREGAR REGALO
                </button>
                {gifts.length > 0 ? <GiftsList gifts={gifts} setGifts={setGifts} setOpenModal={setModalOpen} active = {active} setActive={setActive}   /> : <NoGifts />}
                <div className='cartWrapper'>
                <p className='cartTotal'>Total ${handleTotal()}</p>
                </div>
                

                <button id='delete-all' className='deleteButton' onClick={ handleDelete }>ELIMINAR TODOS</button>
            </div>
        </>
        
    )
}
