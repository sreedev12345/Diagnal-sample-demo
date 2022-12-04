import React,{ useState } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Header setSearch={setSearch}/>
      <Banner search={search}/>
    </div>
  );
}

export default App;
