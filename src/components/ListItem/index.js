import React from 'react'

import './styles.css'

export const ListItem = ({gift, index, setActive, active, setOpenModal, handleDeleteItem}) => {


    return (
        <li key={index} className='list-element'>
            <div className='image-wrapper'>
                {<img alt='gift' className='image-thumbnail' src={gift.url || 'https://c.tenor.com/ycakT-72TBMAAAAi/present-gift.gif'} />}   
            </div>
            <div className='details-wrapper'>
                <p>{`${gift.gift} x (${gift.qty})`}</p>
                <p>{gift.qty ? '$' + gift.qty * gift.price : ''}</p>
                <p className='text-italic'>to: {gift.owner}</p>
            </div>
            <div className='buttons-wrapper'>
                <button
                    className='button button-success'
                    onClick={() => {
                        setOpenModal(true);
                        setActive({ index: index, gift: gift, duplicate: true })
                    }}>
                    Copy
                </button>
                <button
                    className='button button-success'
                    onClick={() => {
                        setOpenModal(true);
                        setActive({ index: index, gift: gift, duplicate: false })
                    }}>
                    Edit
                </button>
                <button
                    className='button button-danger'
                    name={index} onClick={handleDeleteItem}>
                    X
                </button>
            </div>
        </li>
    )
}
