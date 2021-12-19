import React, {  useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';

import CharacterGrid from './components/CharacterGrid';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const endpoint = "https://rickandmortyapi.com/api/character/";

  useEffect(() =>{
    const fetchItems = async () => {
       const result = await fetch(endpoint)
       const data = await result.json();
      

      console.log(data);
        setItems(data);
        setIsLoading(false)
    }

    fetchItems();
  }, [])
  return (
    <div className="container">
      <Header/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
