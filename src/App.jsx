import './App.css'
import React, { useState } from 'react';
import EventCharges from './components/button-charges/btnCharges';
import Evento from './components/button-create/SearchBar';
import SearchFunq from './components/search-bar/search';
import Codes from './components/codigos-teste/codes';




function App() {
  return (
    <div className="container">
    <div className='sidebar-container'>
      <div className='sidebar'>

        <div className='header'>

          {/* Barra de pesquisa */}
          <div className='search-container'>
            <a href='#'><svg height="20px" width="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml: space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <path class="st0" d="M172.625,102.4c-42.674,0-77.392,34.739-77.392,77.438c0,5.932,4.806,10.74,10.733,10.74 c5.928,0,10.733-4.808,10.733-10.74c0-30.856,25.088-55.959,55.926-55.959c5.928,0,10.733-4.808,10.733-10.74 C183.358,107.208,178.553,102.4,172.625,102.4z"></path> <path class="st0" d="M361.657,301.511c19.402-30.436,30.645-66.546,30.645-105.244C392.302,88.036,304.318,0,196.151,0 c-38.676,0-74.765,11.25-105.182,30.663C66.734,46.123,46.11,66.759,30.659,91.008C11.257,121.444,0,157.568,0,196.267 c0,108.217,87.998,196.266,196.151,196.266c38.676,0,74.779-11.264,105.197-30.677C325.582,346.396,346.206,325.76,361.657,301.511 z M259.758,320.242c-19.075,9.842-40.708,15.403-63.607,15.403c-76.797,0-139.296-62.535-139.296-139.378 c0-22.912,5.558-44.558,15.394-63.644c13.318-25.856,34.483-47.019,60.323-60.331c19.075-9.842,40.694-15.403,63.578-15.403 c76.812,0,139.296,62.521,139.296,139.378c0,22.898-5.558,44.53-15.394,63.616C306.749,285.739,285.598,306.916,259.758,320.242z"></path> <path class="st0" d="M499.516,439.154L386.275,326.13c-16.119,23.552-36.771,44.202-60.309,60.345l113.241,113.024 c8.329,8.334,19.246,12.501,30.148,12.501c10.916,0,21.833-4.167,30.162-12.501C516.161,482.83,516.161,455.822,499.516,439.154z"></path> </g> </g></svg></a>
            <SearchFunq/>

          </div>

          {/* Titulo */}
          <h3 className='title-code-bank'>Banco de códigos</h3>

        </div>



        {/* os botões das alterações */}
        <EventCharges/>

        {/* Botão para criar os botoes das alterações */}
        <Evento/>

        {/* Codigos */}
        {/* HTML */}
        
        

      </div>
      
    </div>
    {<Codes/>}
    </div>
  )
}

export default App
