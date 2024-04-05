import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {images} from './data'
import { ImageSlider } from './ImageSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-[1200px] w-[100%] h-5/6 m-auto p'>
    <ImageSlider imageUrls={images} />
    </div>
  )
}

export default App
