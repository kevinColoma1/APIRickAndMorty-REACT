import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar"
import Characters from "./components/Characters"
import Pagination from "./components/Pagination"

function App() {

  const [characters, setCharacters]= useState([]);
  const [info, setInfo] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters =(url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const clickAntes = () =>{
    fetchCharacters(info.prev);
  }
  
  const clickSiguiente = () =>{
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  
  }, []);
  

  return (
    <>
    <Navbar brand="Rick and Morty" />
    <div className="container mt-5">
      <Characters characters={characters} />
      <Pagination prev={info.prev} next={info.next} clickAntes={clickAntes} clickSiguiente={clickSiguiente}/>
    </div>
    </>
    

  );
}

export default App;
