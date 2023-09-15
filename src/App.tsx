import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./assets/styles/styles.scss"
import HomePage from "./pages/HomePage/HomePage"
import Movie from "./pages/Movie/Movie"
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movies/:id' element={<Movie/>}/>
      </Routes>
    </Router>
  )
}

export default App
