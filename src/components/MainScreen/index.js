import React, { useState, useEffect } from 'react'

import { AddGift } from '../AddGift/'
import { GiftsList } from '../GiftList/'
import { Modal } from '../Modal/'
import { EmptyListGift } from '../EmptyGiftList/'
import { Loader } from '../Loader/'
import { Preview } from '../Preview/'


import './styles.css'
import audio from '../../assets/song.mp3'

export const MainScreen = ({ gifts, setGifts, active, setActive, isLoading }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [music, setMusic] = useState("")
    const [paused, setPaused] = useState(true)

    useEffect(() => {
        const music = new Audio(audio)
        music.volume = 0.05
        music.loop = true
        setMusic(music)
    
      }, [])

    const handleDelete = () => {
        setGifts([])
    }

    const handlePrev = () => {
        setActive({ ...active, list: true })
        setModalOpen(true)
    }

    const handleTotal = () => {
        const reducer = (acum, current) => {
            return acum + current.qty * current.price
        }
        const sum = gifts.reduce(reducer, 0)
        return sum
    }

    const handleMusic = () => {
        if (paused) {
    
          music.play()
          setPaused(paused => !paused)
        } else {
          music.pause()
          setPaused(paused => !paused)
        }
      }

      const handleMouse = e => {
          console.log(e)
          e.preventDefault()
      }

    return (
        <div className='content-main'>
            {
                modalOpen &&
                <Modal
                    setOpenModal={setModalOpen}
                    gifts={gifts}
                    setGifts={setGifts}
                    active={active}
                    setActive={setActive}
                    component={active.list ? Preview : AddGift}
                />
            }
            <div className='content-header'>
                <h1>Gift List:</h1>
                <div className='button-wrapper'>
                    <button className="button button-success m-2" onClick={ handleMusic } onMouseDown={e => e.preventDefault()}>Sound</button>
                    <button
                        className="button button-success m-2"
                        autoFocus
                        onClick={() => {
                            setModalOpen(true);
                        }}
                    >
                        + Add Gift
                    </button>
                </div>

            </div>
            <div className='content-body'>
                {isLoading ? <Loader /> : gifts.length > 0 ? <GiftsList gifts={gifts} setGifts={setGifts} setOpenModal={setModalOpen} active={active} setActive={setActive} /> : <EmptyListGift />}
            </div>
            <div className='content-footer'>
                <div className='cart-wrapper'>
                    <p>Total:</p>
                    <p className=''>$ {handleTotal()}</p>
                </div>
                <div className='bottom-button-wrapper'>
                    <button  className='button button-danger w-100' onClick={handleDelete}>
                        Delete All
                    </button>
                    <button  className='button button-success w-100' onClick={handlePrev}>
                        Print Preview
                    </button>
                </div>
            </div>

        </div>

    )
}
