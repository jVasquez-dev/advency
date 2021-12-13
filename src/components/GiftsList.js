import React from 'react'

export const GiftsList = ({gifts, setGifts}) => {

    const show = false

    const handleDeleteItem = e => {
        setGifts(gifts.filter( (gift, index) => index != e.target.name ))
        localStorage.setItem('lista', JSON.stringify(gifts.filter( (gift, index) => index != e.target.name )))
    }

    return (
        <div>
            
            <ul className='list-wrapper'>
                    {gifts.map( (gift, index) => (
                        <li key={index} className='list-element'>
                            { gift.url &&  <img className='small' src={gift.url} /> }
                            <div className=''>
                                <p>{gift.gift}</p>
                                <p className='description-wrapper'>{gift.owner}</p>
                            </div>
                            <div className='delete-wrapper'>
                                <p>{gift.qty}</p>
                                <button 
                                    className='deleteButton' 
                                    name={index} onClick={ handleDeleteItem }>
                                    X
                                </button>
                            </div>  
                        </li>
                    ))}
                
            </ul>
        </div>
    )
}
