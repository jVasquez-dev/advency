import { useState } from 'react';
import './assets/styles.css'
import './assets/modal.css'
import { ListGifts } from "./components/ListGifts";

export default function App() {

    let lista = localStorage.getItem('lista')
    if(lista) {
        lista = JSON.parse(lista);
    }
    const initState = lista || []

    const [gifts, setGifts] = useState(initState)
    const [active, setActive] = useState({index: "", gift: ""})
    
  return (
    <div className="container">
        <ListGifts  gifts = {gifts} setGifts = {setGifts} active = {active} setActive={setActive} />
    </div>
  );
}
