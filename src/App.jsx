import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Diagram from "./assets/Diagram.png"
import Diagrm from "./assets/Diagrm.png"
import Rick from './components/Rick'

function App() {
  const [rickis, setRickis] = useState({})
  const [searchs, setSearchs] = useState("")

  useEffect(() => {
    const rickId = Math.floor(Math.random() * 127)
    axios.get(`https://rickandmortyapi.com/api/location/${rickId}`)
      .then(res => setRickis(res.data))
  }, [])


  const search = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchs}`)
      .then(res => setRickis(res.data))
  }

  console.log(rickis)

const color = ["#0F3B3D", "#136158", "#245465", "#348968"]
const colorNew = Math.floor(Math.random()* color.length)
document.body.style = `background: ${color[colorNew]}`

  return (
    <div className="App">
      <div className='image'>
        <img src={Diagrm} alt="" />
      </div>
      <br />

      <h1>Rick and Morty</h1>

      <div className='name'>

        <input type="text"
          placeholder='Characters'
          value={searchs}
          onChange={e => setSearchs(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </div>
      <h2>{rickis.name}</h2>
       <ul>
        {
      rickis.residents?.map(ricki => (
      <Rick  rickis={ricki}  key={ricki} />
      ))
      }
       </ul>

    </div>
  )
}

export default App
