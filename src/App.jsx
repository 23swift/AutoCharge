
import MainNav from './Components/MainNav'


import { Outlet } from "react-router-dom";

function App() {


  return (
    <div className="container-fluid" style={{ minWidth: 500 }} >
     <MainNav/>
      
          <div >
        <Outlet/>
      </div>
      
    
    </div>
  )
}

export default App
