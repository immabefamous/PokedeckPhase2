import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/pokedex">PokeDex</NavLink>
        </nav>
    );
}

export default NavBar;
