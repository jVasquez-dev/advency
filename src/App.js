import { useState, useEffect } from 'react'

import { MainScreen } from './components/MainScreen'
import { api } from './helpers/api';

import 'normalize.css'
import './styles.css'

export default function App() {

  const [gifts, setGifts] = useState([])
  const [active, setActive] = useState({ index: "", gift: "", duplicate: false, list: false })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api.gifts()
      .then(gifts => setGifts(gifts.data))
      .catch(console.log)
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    api.save(gifts)
      .then(console.log)
      .catch(console.log)
  }, [gifts]);
  

  return (
    <div className='container'>
      <MainScreen
        isLoading={isLoading}
        gifts={gifts}
        setGifts={setGifts}
        active={active}
        setActive={setActive}
      />
    </div>

  );
}
