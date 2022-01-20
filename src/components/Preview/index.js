import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import './styles.css'

export const Preview = (gifts, setOpenModal, setActive) => {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    })

    return (
        <div >
            <div className='container-preview' ref={componentRef}>
                {gifts.gifts.map((gift, index) => (
                    <li key={index} className='list-element'>
                        <div className='image-wrapper'>
                            {<img alt='gift' src={gift.url || 'https://c.tenor.com/ycakT-72TBMAAAAi/present-gift.gif'} />}
                        </div>
                            <p>{`${gift.gift} x (${gift.qty})`}</p>
                            <p className='description-wrapper'>{gift.owner}</p>
                    </li>
                ))}

            </div>
            <button onClick={handlePrint}>Print</button>
        </div>
    )
}
