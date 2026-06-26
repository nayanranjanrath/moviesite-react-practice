
import Moviecard from './component/moviecart'
import './App.css'

function App() {
 

  return (
    <>
      <Moviecard movie={{title:"woow",description:"description is here"}}></Moviecard>
    </>
  )
}
function Text({ children }) {
  return <p>{children}</p>
}

export default App
