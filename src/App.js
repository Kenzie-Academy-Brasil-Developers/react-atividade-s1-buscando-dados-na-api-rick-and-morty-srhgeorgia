import { useEffect, useState } from 'react';
import Characters from './components/Characters';
import './App.css';

function App() {

  const [ characterList, setCharacterList ] = useState([])

  useEffect( () => {
    fetch("https://rickandmortyapi.com/api/character/")
    .then((Response) => Response.json())
    .then(result => setCharacterList(result.results))
  }, [])

  return (
    <div>
      <Characters charList={characterList} />  
    </div>
  );
}

export default App;
