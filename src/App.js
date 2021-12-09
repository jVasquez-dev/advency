import { useState } from 'react';
import './assets/styles.css'

import { AddGift } from "./components/AddGift";
import { ListGifts } from "./components/ListGifts";

export default function App() {

    const [gifts, setGifts] = useState([])
    

  return (
    <div className="container">
        <AddGift gifts = {gifts} setGift = {setGifts}/>
        <ListGifts />
    </div>
  );
}
