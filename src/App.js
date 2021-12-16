import { useState } from 'react';
import './assets/styles.css'
import './assets/modal.css'
import { ListGifts } from "./components/ListGifts"
import { api } from './helpers/api';
import { useEffect } from 'react/cjs/react.development';
import { Loading } from './components/Loading'

export default function App() {

  const [gifts, setGifts] = useState([])
  const [active, setActive] = useState({index: "", gift: ""})
  const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      api.gifts()
        .then(gifts => setGifts(gifts.data))
        .catch(console.log)
        .finally(() => setIsLoading(false))
    }, [])

    useEffect(() => {
      api.save(gifts)
      .then(console.log).catch(console.log)
      .catch(console.log)
    }, [gifts]);
    
  return (
    <div className="container">
        { isLoading ? <Loading /> : <ListGifts  gifts = {gifts} setGifts = {setGifts} active = {active} setActive={setActive} />} 
    </div>
  );
}
