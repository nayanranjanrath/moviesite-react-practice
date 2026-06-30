
import Moviecard from './component/moviecart'
import Home from './pages/home'
import './css/App.css'
import { Routes, Route } from 'react-router-dom'
import Favorite from './pages/favorite'
import Navbar from './component/navbar'
function App() {


  return (
    <>
      <Navbar/>
      <main className="maincontent">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>

        </Routes>
      </main>
    </>

  )
}
function Text({ children }) {
  return <p>{children}</p>
}

export default App
