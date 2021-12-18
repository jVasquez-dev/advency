import React from 'react'

export const GiftsList = ({gifts, setGifts, setOpenModal, active, setActive}) => {

    const handleDeleteItem = e => {
        setGifts(gifts.filter( (gift, index) => index !== parseInt(e.target.name) ))
    }

    return (
        <> 
            <ul className='list-wrapper'>
                    {gifts.map( (gift, index) => (
                        <li key={index} className='list-element'>
                            { gift.url &&  <img alt='gift' className='small' src={gift.url} /> }
                            <div className=''>
                                <p>{`${gift.gift} x (${gift.qty})`}</p>
                                <p className='description-wrapper'>{gift.owner}</p>
                            </div>
                            <div className='delete-wrapper'>
                                <p>{gift.qty ? '$' +  gift.qty * gift.price : ''}</p>
                                <button 
                                    className='editButton' 
                                    onClick={ () => {
                                        setOpenModal(true);
                                        setActive({index: index, gift: gift})
                                    } }>
                                    Editar
                                </button>
                                <button 
                                    className='deleteButton' 
                                    name={index} onClick={ handleDeleteItem }>
                                    X
                                </button>
                            </div>  
                        </li>
                    ))}
            </ul>
        </>
    )
}
