import React, { useState } from 'react'
import { giftSugentions } from '../../helpers/giftSugestions'

import './styles.css'

export const AddGift = ({ gifts, setGifts, setOpenModal, active, setActive }) => {

    const { index, gift, duplicate } = active
    console.log(duplicate)
    const initState = {
        giftName: gift.gift || '',
        giftQty: gift.qty || '',
        giftURL: gift.url || '',
        giftOwner: gift.owner || '',
        giftPrice: gift.price || ''
    }

    let newGifts

    const [values, setValues] = useState(initState)

    const { giftName, giftQty, giftURL, giftOwner, giftPrice } = values

    const handleInputChange = ({ target }) => {
        setValues({ ...values, [target.name]: target.value })
    }

    const handleSubmit = e => {
        console.log(e.target.giftPrice)
        e.preventDefault()
        const { giftName, giftQty, giftURL, giftOwner, giftPrice } = e.target

        if (!giftName.value.trim()) {
            return
        }

        if (typeof (index) === 'number' && duplicate === false) {
            newGifts = [...gifts]
            newGifts[index] = { gift: giftName.value, qty: giftQty.value || 1, url: giftURL.value || '', owner: giftOwner.value, price: giftPrice.value }
        } else {
            newGifts = [...gifts, { gift: giftName.value, qty: giftQty.value || 1, url: giftURL.value || '', owner: giftOwner.value, price: giftPrice.value }]
        }

        setGifts(newGifts)

        setValues({
            giftName: '',
            giftQty: '',
            giftURL: '',
            giftOwner: '',
            giftPrice: ''
        })
        setActive({ index: "", gift: "" })
        setOpenModal(false)
    }

    return (
        <div>
            <h2 className='title'>Add gifts to your list!</h2>
            <form onSubmit={handleSubmit} className='form-container'>
                    <label className="field-wrapper" for="giftName">
                        Gift:
                        <input
                            type="text"
                            placeholder="socks, mug, iphone..."
                            onChange={handleInputChange}
                            name='giftName'
                            value={giftName}
                            autoFocus
                            className='input-large'
                        />
                    </label>
                    <label className='field-wrapper'>
                        Picture:
                        <input
                            type="text"
                            placeholder="https://www.my-gift..."
                            onChange={handleInputChange}
                            name='giftURL'
                            value={giftURL}
                            className='input-large'
                        />
                    </label>
                    <label className='field-wrapper'>
                        To:
                        <input
                            type="text"
                            placeholder="mom, dad.."
                            onChange={handleInputChange}
                            name='giftOwner'
                            value={giftOwner}
                            className='input-large'
                        />
                    </label>
                    <label className='field-wrapper'>
                        Qty:
                        <input
                            type="number"
                            placeholder='quantity'
                            min="1"
                            onChange={handleInputChange}
                            name='giftQty'
                            value={giftQty}
                            className='input-large w-200'
                        />
                    </label>
                    <label className='field-wrapper'>
                        Price:
                    <input
                        type="number"
                        placeholder='$'
                        min="0"
                        onChange={handleInputChange}
                        name='giftPrice'
                        value={giftPrice}
                        className='input-large  w-200'
                    />
                    </label>
                <button
                    type='submit'
                    className='button button-success w-100'
                >
                    {typeof (index) === 'number' ? "GUARDAR CAMBIOS" : "AÑADIR REGALO"}
                </button>
            </form>
        </div>
    )
}
