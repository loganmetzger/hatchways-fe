import axios from "axios";
import React, {useEffect, useState} from 'react'
import BeerList from  './components/BeerList'

function App() {
  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((res) => {
        setBeers(res.data)
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="App">
      <h1>HEYA</h1>
      <BeerList beers={beers} />
    </div>
  );
}

export default App;
