import React from "react";
import ReactDOM from 'react-dom';
import './btnCharges.css'
import charges from '/jsons/charges.json'





function EventCharges() {

  const chargesData = charges.alteracoes;


    return (
        <div>
          <ul className="container-btn-charges">
            {chargesData.map((alteracoes) => (
              <a key={alteracoes.id} className="btn-changes" href={`./components/codigos-teste/codes/${alteracoes.id}`}>
                <li>{alteracoes.name}</li>
              </a>
            ))}
          </ul>
        </div>
      );
}

export default EventCharges