import { use, useState } from 'react'
import extensionLogo from './assets/images/logo.svg'
import dark from './assets/images/icon-moon.svg'
import light from './assets/images/icon-sun.svg'
import './App.css'
import Extension from './component/Extension'
// import data from './data.json'
import { useEffect } from 'react'

function App() {
  const [cards, setCards] = useState([
    {
        "logo": "src/assets/images/logo-devlens.svg",
        "name": "DevLens",
        "description": "Quickly inspect page layouts and visualize element boundaries.",
        "isActive": true
    },
    {
        "logo": "src/assets/images/logo-style-spy.svg",
        "name": "StyleSpy",
        "description": "Instantly analyze and copy CSS from any webpage element.",
        "isActive": true
    },
    {
        "logo": "src/assets/images/logo-speed-boost.svg",
        "name": "SpeedBoost",
        "description": "Optimizes browser resource usage to accelerate page loading.",
        "isActive": false
    },
    {
        "logo": "src/assets/images/logo-json-wizard.svg",
        "name": "JSONWizard",
        "description": "Formats, validates, and prettifies JSON responses in-browser.",
        "isActive": true
    },
    {
        "logo": "src/assets/images/logo-tab-master-pro.svg",
        "name": "TabMaster Pro",
        "description": "Organizes browser tabs into groups and sessions.",
        "isActive": true
    },
    {
        "logo": "src/assets/images/logo-viewport-buddy.svg",
        "name": "ViewportBuddy",
        "description": "Simulates various screen resolutions directly within the browser.",
        "isActive": false
    },
    {
        "logo": "src/assets/images/logo-markup-notes.svg",
        "name": "Markup Notes",
        "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
        "isActive": true
    },
    {
        "logo": "src/assets/images/logo-grid-guides.svg",
        "name": "GridGuides",
        "description": "Overlay customizable grids and alignment guides on any webpage.",
        "isActive": false
    },
    {
        "logo": "src/assets/images/logo-palette-picker.svg",
        "name": "Palette Picker",
        "description": "Instantly extracts color palettes from any webpage.",
        "isActive": true
    },
    {
        "logo": "src/assets/images/logo-link-checker.svg",
        "name": "LinkChecker",
        "description": "Scans and highlights broken links on any page.",
        "isActive": true
    },
    {
        "logo": "src/assets/images/logo-dom-snapshot.svg",
        "name": "DOM Snapshot",
        "description": "Capture and export DOM structures quickly.",
        "isActive": false
    },
    {
        "logo": "src/assets/images/logo-console-plus.svg",
        "name": "ConsolePlus",
        "description": "Enhanced developer console with advanced filtering and logging.",
        "isActive": true
    }
  ])
  
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode')
    
  }
  const [newcard, setNewcard] = useState(cards)
  function filter(e) {
    
    console.log(e.target.name);
    if (e.target.name === 'all') {
      setNewcard(cards)
    }
    else if (e.target.name === 'active') {
      const filteredCards = cards.filter((card) => card.isActive)
      setNewcard(filteredCards)
    }
  else if (e.target.name === 'inactive') {
    const filteredCards = cards.filter((card) => !card.isActive)
    setNewcard(filteredCards)
  }
  
  
}
const extensionCard = newcard.map((card) => {
  return (
    <Extension
    key={card.id}
    name={card.name}
    description={card.description}
    image={card.logo}
    options={card.isActive}
    className={!darkMode?"extension":"extension dark-mode"}
    
    />
  )
}
)
return (
    <main >
    <div className={!darkMode?"title-container":"title-container dark-mode"}>
      <div className="title">
      <img src={extensionLogo} className="logo" alt="Vite logo" />
      </div>
      <div className="theme">
        <button 
        type="button"
        onClick={toggleDarkMode}
        >
          <img src={darkMode ? dark : light} alt="dark" />

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
      {extensionCard}
      
      
      
    </div>
    </main>
  )
}

export default App
