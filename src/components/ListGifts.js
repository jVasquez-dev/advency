import React from 'react'
import { GiftsList } from './GiftsList'
import { NoGifts } from './NoGifts'

export const ListGifts = ({gifts, setGifts}) => {
    return (
        <div className='list-gifts'>
            <h1 className='title'>Lista de Regalos</h1>
            { gifts.length > 0 ? <GiftsList gifts = {gifts} setGifts = {setGifts} /> : <NoGifts /> }

        </div>
    )
}
