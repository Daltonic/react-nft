import './App.css'
import Header from './components/Header'
import axios from 'axios'

import { useState, useEffect } from 'react'
import PunkList from './components/PunkList'
import Main from './components/Main'

function App() {
  const [punksListData, setPunksListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  const getPuncks = async () => {
    const openseaData = await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_address=0x952462E6f928EaE183F6c619F3EDDa271A5cd91f&order_direction=asc'
    )
    console.log(openseaData.data.assets)
    setPunksListData(openseaData.data.assets)
  }

  useEffect(() => getPuncks(), [])

  return (
    <div className="app">
      <Header />
      {punksListData.length > 0 && (
        <>
          <Main punkListData={punksListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punksListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  )
}

export default App
