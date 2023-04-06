import { useState } from 'react'
import Home from "./component/home/index.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="d-flex justify-content-center flex-column bg_White trn3 container ">
        <Home/>
    </div>
  )
}

export default App
