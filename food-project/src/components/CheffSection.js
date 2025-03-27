import React from 'react'
import CheffCards from './CheffCards'

function CheffSection() {
  const cheffs= [
        {
          name:"Juan Carlos",
          img: "/gallery/top-chefs/img_1.jpg",
          recipeCount:"10",
          cuisine: "Mexican",
        },
        {
          name:"Jhon Doe",
          img: "/gallery/top-chefs/img_2.png",
          recipeCount:"05",
          cuisine: "Japanese",
        },
        {
          name:"Erich Maria",
          img: "/gallery/top-chefs/img_3.png",
          recipeCount:"13",
          cuisine: "Italian",
        },
        {
          name:"Chris Brown",
          img: "/gallery/top-chefs/img_4.jpg",
          recipeCount:"08",
          cuisine: "Mexican",
        },
        {
          name:"Blake Lively",
          img: "/gallery/top-chefs/img_5.jpg",
          recipeCount:"09",
          cuisine: "French",
        },
        {
          name:"Ben Akors",
          img: "/gallery/top-chefs/img_6.jpg",
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