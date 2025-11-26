import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header.jsx'
import Work from './components/Work.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <script src="https://kit.fontawesome.com/fa8e423f7a.js" crossorigin="anonymous"></script>
      <div className="App">
        <Header />
        <Work />
      </div>
    </>
  )  
}

export default App
