import React from 'react';

import './style.css'

function Studies({iDo, local, description}) {
  return (
    <div className="card">
      <p>{ iDo }</p>
      <div className="infos">
        <div className="local">
          <p>{ local }</p>
        </div>
        <div className="description">
          <p>{ description }</p>
        </div>
      </div>
    </div>
  );
}

export default Studies;
