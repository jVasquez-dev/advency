import React, { useState } from 'react'
import { giftSugentions } from '../helpers/giftSugestions'

export const AddGift = ({ gifts, setGifts, setOpenModal, active, setActive }) => {

    const { index, gift } = active
    const initState = {
        giftName: gift.gift || '',
        giftQty: gift.qty || '',
        giftURL: gift.url || '',
        giftOwner: gift.owner || ''
    }

    let newGifts

    const [values, setValues] = useState(initState)

    const { giftName, giftQty, giftURL, giftOwner } = values

    const handleInputChange = ({ target }) => {
        setValues({ ...values, [target.name]: target.value })
    }

    const handleCreateRandom = (e) => {
        e.preventDefault()
        const sugestion = Math.floor(Math.random() * (giftSugentions.length))
        setValues({ ...values, giftName: giftSugentions[sugestion] })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { giftName, giftQty, giftURL, giftOwner } = e.target

        if (!giftName.value.trim()) {
            return
        }

        if (typeof (index) === 'number') {
            newGifts = [...gifts]
            newGifts[index] = { gift: giftName.value, qty: giftQty.value || 1, url: giftURL.value || '', owner: giftOwner.value }
        } else {
            newGifts = [...gifts, { gift: giftName.value, qty: giftQty.value || 1, url: giftURL.value || '', owner: giftOwner.value }]
        }

        setGifts(newGifts)

        setValues({
            giftName: '',
            giftQty: '',
            giftURL: '',
            giftOwner: ''
        })
        setActive({ index: "", gift: "" })
        setOpenModal(false)
    }

    return (
        <div className='add-gift'>
            <h1 className='title'>¡Agrega regalos a tu lista navideña!</h1>
            <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                    <div className='name-wrapper'>
                        <input
                            type="text"
                            placeholder="Agrega un regalo aqui"
                            onChange={handleInputChange}
                            name='giftName'
                            value={giftName}
                            className=''
                            autoFocus
                            className='input-name-small'
                        />
                        <button onClick={handleCreateRandom} className='addButton-small' >
                            Sorprendeme
                        </button>
                    </div>
                    <input
                        type="text"
                        placeholder="Agrega imagen del regalo"
                        onChange={handleInputChange}
                        name='giftURL'
                        value={giftURL}
                        className='input-name'
                    />
                    <input
                        type="text"
                        placeholder="Para quien es el regalo"
                        onChange={handleInputChange}
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
                        value={giftQty}
                        className='input-qty'
                    />
                </div>
                <button
                    type='submit'
                    className='addButton'
                >
                    { typeof(index) === 'number' ? "GUARDAR CAMBIOS" : "AÑADIR REGALO" }
                </button>
            </form>
        </div>
    )
}
