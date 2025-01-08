import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome'
import ShowBooks from './components/AllTheBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNav />
      <Welcome />
      <ShowBooks />
      <MyFooter />
    </>
  )
}

export default App
