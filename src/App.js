
import './App.css';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react'
import Register from './components/Register';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";



// https://gateway.marvel.com:443/v1/public/comics?apikey=

//private key: 01c49a0270ac11ddd5d0dbdb313141cb99baa623
//public key: be597d9618c18731a590d8d4f5a3bb68
//ts: 1

// 101c49a0270ac11ddd5d0dbdb313141cb99baa623be597d9618c18731a590d8d4f5a3bb68
// hash: 27c54a0ef823b61e7abef5f6b1aa5819

export function App() {

  const [comicsFav, setComicsFav] = useState(false);

  const [comics, setComics] = useState([])
  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=be597d9618c18731a590d8d4f5a3bb68&hash=27c54a0ef823b61e7abef5f6b1aa5819').then(respone => {
      setComics(respone.data.data.results);
    }).catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Marvel</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {comics.map(comic=>(
            <div className="col" key={comic.id}>
            <div className="card" style={{width: "18rem", height: "22rem", padding:"0% 0% 15% 0%"}}>
            <button className='fav-comic' onClick={() => setComicsFav(!comicsFav)}>
              {comicsFav ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
              </button>
              <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} className="card-img-top" style={{width:"100%", height:"80%"}} />
              <div className="card-body">
                <p className="card-text">{comic.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

