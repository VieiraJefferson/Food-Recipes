import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faTwitter, faInstagram }from '@fortawesome/free-brands-svg-icons';

function CheffCards({cheff}) {
  return (
    <div className="cheff-card">
        <img src={cheff.img} alt="" />
        <div className="cheff-card-info">
        <h3 className="cheff-card-name">{cheff.name} </h3>
        <p className="cheff-recipe-count">Recipes: <b>{cheff.recipeCount} </b> </p>
        <p className="cheff-cuisine">Cuisine: <b>{cheff.cuisine} </b> </p>
        <p className="cheff-icons">
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faInstagram}/>
        </p>
        </div>
     
    </div>
  )
}

export default CheffCards