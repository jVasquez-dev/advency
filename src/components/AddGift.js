import React, { useState } from 'react'

export const AddGift = ({gifts, setGifts}) => {

    const [values, setValues] = useState({
        giftName: '',
        giftQty: ''
    })

    const {giftName, giftQty} = values

    const handleInputChange = ({target}) => {
        setValues({...values, [target.name]: target.value})
    }

    console.log(gifts)
    return (
        
        <div className='add-gift'>
            <h1>Add gift</h1>
            <form>
                <input
                    type="text" 
                    placeholder="Agrega un regalo aqui"
                    onChange={ handleInputChange }
                    name='giftName' 
                    value={giftName}
                />
                <input 
                    type="number" 
                    min="1" 
                    onChange={handleInputChange}
                    name='giftQty'
                    value={ giftQty }
                />
                <button>Añadir regalo</button>
            </form>
            <button>Eliminar todos</button>
         
        </div>
    )
}
