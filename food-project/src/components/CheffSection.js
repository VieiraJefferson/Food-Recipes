import React from 'react'
import CheffCards from './CheffCards'

function CheffSection() {
  const cheffs= [
        {
          name:"Juan Carlos",
          img: "/Galery/top-chefs/img_1.jpg",
          recipeCount:"10",
          cuisine: "Mexican",
        },
        {
          name:"Jhon Doe",
          img: "/Galery/top-chefs/img_2.jpg",
          recipeCount:"05",
          cuisine: "Japanese",
        },
        {
          name:"Erich Maria",
          img: "/Galery/top-chefs/img_3.jpg",
          recipeCount:"13",
          cuisine: "Italian",
        },
        {
          name:"Chris Brown",
          img: "/Galery/top-chefs/img_4.jpg",
          recipeCount:"08",
          cuisine: "Mexican",
        },
        {
          name:"Blake Lively",
          img: "/Galery/top-chefs/img_5.jpg",
          recipeCount:"09",
          cuisine: "French",
        },
        {
          name:"Ben Akors",
          img: "/Galery/top-chefs/img_6.jpg",
          recipeCount:"04",
          cuisine: "Indian",
        },

        

  ]
  return (
    <div className="section cheffs">
        <h1 className="title">Our top Cheff's</h1>
          <div className="top-cheffs-container">
              {/* <CheffCards/>
              <CheffCards/>
              <CheffCards/>
              <CheffCards/>
              <CheffCards/>
              <CheffCards/> */}
              {cheffs.map(cheff=><CheffCards key={cheff.name} cheff={cheff}/>
               )
              }
          </div>
        </div>
  )
}

export default CheffSection