import React from "react";
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import './NavBar.css';

const NavBar = () => {
  return (
    <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie /> showMovies</Link>
        </h2>
        <form>
          <input type="text" placeholder="Search for a movie" />
          <button type="submit">
              <BiSearchAlt2 />
          </button>
        </form>
{/*         <h2>
          <Link to="/movie/1">Movies</Link>
          <Link to="/search">Search</Link>
        </h2> */}
      </nav>
  );
};

export default NavBar;
