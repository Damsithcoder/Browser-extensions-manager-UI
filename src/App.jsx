import { use, useState } from 'react'
import extensionLogo from './assets/images/logo.svg'
import dark from './assets/images/icon-moon.svg'
import light from './assets/images/icon-sun.svg'
import './App.css'
import Extension from './component/Extension'
import { useEffect } from 'react'

function App() {
  const [cards, setCards] = useState([])
  const getData=()=>{
    fetch('https://damsithcoder.github.io/API/data.json')
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setCards(myJson);
        console.log(myJson);
        
      });
  }
  useEffect(()=>{
    getData()
  },[])
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode')
    
  }
  const [newcard, setNewcard] = useState(cards)
  function filter(e) {
    
    // console.log();
    if (e.target.name === 'all') {
      setNewcard(cards)
    }
    else if (e.target.name === 'active') {
      const filteredCards = cards.filter((card,index) => card.isActive)
      setNewcard(filteredCards)
    }
  else if (e.target.name === 'inactive') {
    const filteredCards = cards.filter((card,index) => !card.isActive)
    setNewcard(filteredCards)
  }
  
  
}
// const extensionCard = 
return (
    <main >
    <div className={!darkMode?"title-container":"title-container dark-mode"}>
      <div className="title">
      <img src={extensionLogo} className="logo" alt="Vite logo" />
      </div>
      <div className="theme">
        <button 
        type="button"
        className='theme'
        onClick={toggleDarkMode}
        >
          <img src={darkMode ? light : dark} alt="dark" />

        </button>
      </div>
    </div>
    <div className={!darkMode?"filter-container":"filter-container dark-mode"}>
      <h1>Extension List</h1>
      <div className="filters">
        <input type="button" name='all' value="All" onClick={filter}/>
        <input type="button" name='active' value="Active" onClick={filter}/>
        <input type="button" name='inactive' value="Inactive" onClick={filter}/>
      </div>
    </div>
    <div className={!darkMode?"extension-container":"extension-container dark-mode"}>
      {newcard.map((card,index) => {
        
        return (
          <Extension
          key={card.index}
          name={card.name}
          description={card.description}
          image={card.logo}
          options={card.isActive}
          className={!darkMode?"extension":"extension dark-mode"}
          
          />
        )
        console.log(index);
}
)}
      
      
      
    </div>
    </main>
  )
}

export default App
