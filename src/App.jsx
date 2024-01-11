import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import ChannelBar from './components/channelBar/ChannelBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'> 
      <Sidebar/>
      <ChannelBar/>
    </div>
  )
}

export default App
