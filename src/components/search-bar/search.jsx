import React from "react";
import './search.css'


function SearchFunq() {

    function SearchCharge() {
        alert("Esta certo")
    }

    return (
        <input className='search-bar' type="text" onClick={SearchCharge} placeholder='Pesquise aqui..' />
    )
}

export default SearchFunq