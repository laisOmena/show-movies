import { Link, Outlet } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to="/">showMovies</Link>
        </h2>
        <h2>
          <Link to="/movie/1">Movies</Link>
          <Link to="/search">Search</Link>
        </h2>
      </nav>
      <h2>Show Movies</h2>
      <Outlet />
    </div>
  )
}

export default App
