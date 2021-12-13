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
    
  return (
    <div className="container">
        <ListGifts  gifts = {gifts} setGifts = {setGifts} />
    </div>
  );
}
