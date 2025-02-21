import React from 'react';
import PreviousSearches from '../components/PreviousSearches';
import RecipeCard from '../components/RecipeCard';

function Recipes() {
  const recipes = [
    {
        title: "Chicken Pan Pizza",
        image: "/Galery/img/img_1.jpg",
        authorImg: "/Galery/top-chefs/img_1.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/Galery/img/img_4.jpg",
        authorImg: "/Galery/top-chefs/img_2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/Galery/img/img_5.jpg",
        authorImg: "/Galery/top-chefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/Galery/img/img_6.jpg",
        authorImg: "/Galery/top-chefs/img_5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/Galery/img/img_10.jpg",
        authorImg: "/Galery/top-chefs/img_6.jpg",
    },
    {
        title: "Chicken Pan Pizza",
        image: "/Galery/img/img_1.jpg",
        authorImg: "/Galery/top-chefs/img_1.jpg",
    }, 
    {
        title: "Spaghetti and Meatballs",
        image: "/Galery/img/img_7.jpg",
        authorImg: "/Galery/top-chefs/img_2.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/Galery/img/img_5.jpg",
        authorImg: "/Galery/top-chefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/Galery/img/img_6.jpg",
        authorImg: "/Galery/top-chefs/img_5.jpg",
    },
    {
        title: "Japanese Sushi",
        image: "/Galery/img/img_3.jpg",
        authorImg: "/Galery/top-chefs/img_6.jpg",
    },
    {
        title: "American Cheese Burger",
        image: "/Galery/img/img_7.jpg",
        authorImg: "/Galery/top-chefs/img_3.jpg",
    },
    {
        title: "Mutton Biriyani",
        image: "/Galery/img/img_5.jpg",
        authorImg: "/Galery/top-chefs/img_5.jpg",
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