import { useState } from 'react';
import './assets/styles.css'

import { AddGift } from "./components/AddGift";
import { ListGifts } from "./components/ListGifts";

export default function App() {

    let lista = localStorage.getItem('lista')
    console.log(lista)
    if(lista) {
        lista = JSON.parse(lista);
    }

    const initState = lista || []

    const [gifts, setGifts] = useState(initState)
    

  return (
    <div className="container">
        <AddGift gifts = {gifts} setGifts = {setGifts}/>
        <ListGifts  gifts = {gifts} setGifts = {setGifts} />
    </div>
  );
}
