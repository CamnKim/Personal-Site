import Navbar from './components/Navbar'
import About from './components/About'
import './App.scss'

// content thats subject to change
const { introduction } = require('./content.json')

function App() {
  return (
    <>
      <Navbar />
      <About introduction={introduction} />
    </>
  )
}

export default App
