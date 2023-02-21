import './App.css'
import Nav from "./conponents/Nav"
import AuthButtons from "./conponents/AuthButtons"
import Header from './conponents/Header'
import Trending from './conponents/Trending'
function App() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5'>
      <Nav/>
      <main className='px-12 py-6  md:col-span-4 bg-cyan-50'>
        <AuthButtons/>
        <Header/>
        <Trending/>
      </main>
    </div>
  )
}

export default App
