import React from "react";
import { Link } from "react-router-dom";

const NavBar = ()=>{

    return(
        <div className="flex justify-around text-4xl text-white p-10 bg-slate-900">
            <Link to={'/'} className="p-2 hover:text-slate-400">Dogs</Link>
            <Link to={'/cat'} className="p-2 hover:text-slate-400">Cats</Link>
        </div>
    )
}

export default NavBar