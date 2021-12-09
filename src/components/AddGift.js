import React, { useState } from 'react'

export const AddGift = ({gifts, setGifts}) => {

      const [values, setValues] = useState({
        giftName: '',
        giftQty: ''
    })

    const {giftName, giftQty} = values

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
        gift.gift == newGift
        ).length > 0)

    //    setIsDuplicated(duplicated)
    
        if(duplicated){
            setIsDuplicated(true)
        }else {
            setIsDuplicated(false)
            setGifts([...gifts, {gift: newGift, qty: e.target.giftQty.value || 1}])
            localStorage.setItem('lista', JSON.stringify([...gifts, {gift: newGift, qty: e.target.giftQty.value || 1}]));
        }
        
    }

    const handleDelete = () => {
        setGifts([])
        localStorage.setItem('lista', [])
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
                    type="number" 
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
            <button className='deleteButton' onClick={ handleDelete }>ELIMINAR TODOS</button>
         
        </div>
    )
}
