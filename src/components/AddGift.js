import React, { useState } from 'react'

export const AddGift = ({gifts, setGifts, setOpenModal}) => {

      const [values, setValues] = useState({
        giftName: '',
        giftQty: '',
        giftURL:'',
        giftOwner: ''
    })

    const {giftName, giftQty, giftURL, giftOwner} = values

    const [isDuplicated, setIsDuplicated] = useState()

    const handleInputChange = ({target}) => {
        setValues({...values, [target.name]: target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newGift = e.target.giftName.value

        if(!newGift.trim()){
            return
        }

        const duplicated = (gifts.filter( (gift) => 
        gift.gift === newGift
        ).length > 0)

        console.log(typeof(e.target.giftURL.value) )
    
        if(duplicated){
            setIsDuplicated(true)
            setValues({giftName: '',
            giftQty: '',
            giftURL:''})
        }else {
            setIsDuplicated(false)
            setGifts([...gifts, {gift: newGift, qty: e.target.giftQty.value || 1, url: e.target.giftURL.value || '', owner: e.target.giftOwner.value}])
            localStorage.setItem('lista', JSON.stringify([...gifts, {gift: newGift, qty: e.target.giftQty.value || 1, url: e.target.giftURL.value || ''}]));
            setValues({giftName: '',
            giftQty: '',
            giftURL:'',
            giftOwner:''})
            setOpenModal(false)
        }
        
    }

    return (
        
        <div className='add-gift'>
            <h1 className='title'>¡Agrega regalos a tu lista navideña!</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                <input
                    type="text" 
                    placeholder="Agrega un regalo aqui"
                    onChange={ handleInputChange }
                    name='giftName' 
                    value={giftName}
                    className='input-name'
                />
                 <input
                    type="text" 
                    placeholder="Agrega imagen del regalo"
                    onChange={ handleInputChange }
                    name='giftURL' 
                    value={giftURL}
                    className='input-name'
                />
                 <input
                    type="text" 
                    placeholder="Para quien es el regalo"
                    onChange={ handleInputChange }
                    name='giftOwner' 
                    value={giftOwner}
                    className='input-name'
                />
                <input 
                    type="number"
                    placeholder='cantidad' 
                    min="1" 
                    onChange={handleInputChange}
                    name='giftQty'
                    value={ giftQty }
                    className='input-qty'
                />
                </div>
                {isDuplicated ? <p>Regalo repetido, ingresa otro.</p> : <p></p>}
                <button
                    type='submit'
                    className='addButton'
                >
                    AÑADIR REGALO
                </button>
            </form>
            
         
        </div>
    )
}
