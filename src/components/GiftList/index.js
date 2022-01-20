import React from 'react'

import { ListItem } from '../ListItem'

import './styles.css'

export const GiftsList = ({gifts, setGifts, setOpenModal, active, setActive}) => {

    const handleDeleteItem = e => {
        setGifts(gifts.filter( (gift, index) => index !== parseInt(e.target.name) ))
    }

    return (
        <> 
            <ul className='list-wrapper'>
                    {gifts.map( (gift, index) => (
                        <ListItem handleDeleteItem={handleDeleteItem} key={index} gift={gift} index={index} setOpenModal={setOpenModal} active={active} setActive={setActive} />
                    ))}
            </ul>
        </>
    )
}
