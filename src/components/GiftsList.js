import React from 'react'

export const GiftsList = ({gifts, setGifts}) => {

    const handleDeleteItem = e => {
        console.log(e.target.name)
        setGifts(gifts.filter( (gift, index) => index != e.target.name ))
        localStorage.setItem('lista', JSON.stringify(gifts.filter( (gift, index) => index != e.target.name )))
    }

    return (
        <div>
            <ul className='list-wrapper'>
                    {gifts.map( (gift, index) => (
                        <li key={index} className='list-element'>
                            <p>{gift.gift}</p>
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
