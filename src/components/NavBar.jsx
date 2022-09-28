import { useState } from 'react';
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import './NavBar.css';

const NavBar = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!search) return;

    navigate(`/search?q=${search}`);
    setSearch('');
  };

  return (
    <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie /> showMovies</Link>
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a movie"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
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
