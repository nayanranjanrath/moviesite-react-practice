
import Moviecard from './component/moviecart'
import Home from './pages/home'
import './App.css'
import { Routes, Route } from 'react-router-dom'
function App() {
 

  return (
    <main className="maincontent">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        
      </Routes>
    </main>
  )
}
function Text({ children }) {
  return <p>{children}</p>
}

export default App
