import './App.css'
import Header from './components/Header'
import axios from 'axios'

import { useState, useEffect } from 'react'
import PunkList from './components/PunkList'

function App() {
  const [punksList, setPunksList] = useState([])

  const getPuncks = async () => {
    const openseaData = await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_address=0x952462E6f928EaE183F6c619F3EDDa271A5cd91f&order_direction=asc'
    )
    console.log(openseaData.data.assets)
    setPunksList(openseaData.data.assets)
  }

  useEffect(() => getPuncks(), [])

  return (
    <div className="app">
      <Header />
      <PunkList punkListData={punksList} />
    </div>
  )
}

export default App
