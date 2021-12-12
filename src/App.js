import { useState } from 'react';
import './assets/styles.css'
import './assets/modal.css'

import { AddGift } from "./components/AddGift";
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
        {/* <AddGift gifts = {gifts} setGifts = {setGifts}/>n */}
        <ListGifts  gifts = {gifts} setGifts = {setGifts} />
    </div>
  );
}
