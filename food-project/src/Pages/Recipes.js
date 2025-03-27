import React from 'react';
import PreviousSearches from '../components/PreviousSearches';
import RecipeCard from '../components/RecipeCard';

function Recipes() {
  const recipes = [
    {
        title: "Chicken Pan Pizza",
        image: "/gallery/img/img_1.jpg",
        authorImg: "/gallery/top-chefs/img_1.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/gallery/img/img_4.jpg",
        authorImg: "/gallery/top-chefs/img_2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/gallery/img/img_5.jpg",
        authorImg: "/gallery/top-chefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/gallery/img/img_6.jpg",
        authorImg: "/gallery/top-chefs/img_5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/gallery/img/img_10.jpg",
        authorImg: "/gallery/top-chefs/img_6.jpg",
    },
    {
        title: "Chicken Pan Pizza",
        image: "/gallery/img/img_1.jpg",
        authorImg: "/gallery/top-chefs/img_1.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/gallery/img/img_7.jpg",
        authorImg: "/gallery/top-chefs/img_2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/gallery/img/img_5.jpg",
        authorImg: "/gallery/top-chefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/gallery/img/img_6.jpg",
        authorImg: "/gallery/top-chefs/img_5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/gallery/img/img_3.jpg",
        authorImg: "/gallery/top-chefs/img_6.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/gallery/img/img_7.jpg",
        authorImg: "/gallery/top-chefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/gallery/img/img_5.jpg",
        authorImg: "/gallery/top-chefs/img_5.jpg",
    }
].sort(() => Math.random() - 0.5)


  return (
    <div>
      <PreviousSearches/>
      <div className="recipes-container">
          {/* <RecipeCard /> */}
          {recipes.map((recipe,index)=>(
            <RecipeCard key={index} recipe={recipe} />
          ))}
         
      </div>
      </div>
  )
}

export default Recipes