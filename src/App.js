import React from 'react'
import { AppProvider } from './context/AppContext'
import Tile from './components/Tile'
import TextBox from './components/Textbox'
import ResetButton from './components/ResetButton'

import './App.css'

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <div className='row-textbox'>
          <TextBox />
        </div>
        <div className='row'>
          <div className='tile'>
            <Tile id="Tile11"/>
          </div>
          <div className='tile'>
            <Tile id="Tile12"/>
          </div>
          <div className='tile'>
            <Tile id="Tile13"/>
          </div>
        </div>
        <div className='row'>
          <div className='tile'>
            <Tile id="Tile21"/>
          </div>
          <div className='tile'>
            <Tile id="Tile22"/>
          </div>
          <div className='tile'>
            <Tile id="Tile23"/>
          </div>
        </div>
        <div className='row'>
          <div className='tile'>
            <Tile id="Tile31"/>
          </div>
          <div className='tile'>
            <Tile id="Tile32"/>
          </div>
          <div className='tile'>
            <Tile id="Tile33"/>
          </div>
        </div>
        <div className='row-reset-button'>
          <ResetButton />
        </div>

      </div>

    </AppProvider>
  )
}

export default App
