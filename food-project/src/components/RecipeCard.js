import React from 'react';
import CustomImage from './CustomImage';

function RecipeCard({recipe}) {

  return (
    <div className="recipe-card">
       <CustomImage imgSrc={recipe.image} pt="65%" />
       <div className="recipe-card-info">
        <img className="auther-img" src={recipe.authorImg} alt=""/>
        <p className="recipe-title">{recipe.title} </p> 
        <p className="recipe-desc">Lorem import from 'react-icons/s</p>
        <a className="view-btn" href="#!">VIEW RECIPE</a>   
    </div>
    </div>
  )
}

export default RecipeCard;