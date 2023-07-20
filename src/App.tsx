// import './styles/App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavBar } from "./components/Navbar";
import { Menu } from "./components/Menu";
function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      {/* <h1>oli</h1> */}
      <NavBar />
      <Routes>
        <Route path='/Menu' element={<Menu />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
