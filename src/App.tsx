import './App.scss'

// Components
import Hero from './components/Hero/Hero'
import OurServices from './components/OurServices/OurServices'

function App() {

  return (
    <div className='app'>
      <div className="app__container container">
        <Hero />
        <OurServices />
      </div>
    </div>
  )
}

export default App
