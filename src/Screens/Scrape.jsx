import React from 'react'
import { Graph } from '../Components/Graph';

const Scrape = () => {
  const categories=["All","Best Seller","T.V","Electronics","Fashion","Mobiles","Bean Bag","Furniture","Tablet","Books","Movie Ticket","Groceries","Home Furnishing","Jewely","Footwear & Shoes","Clothing & Apparel"];
  return (
    <div className="analytics">
      <div className="heading">
        <h2>Hi! User &#128075;</h2>
        <p>Choose from handpicked Bestseller categories</p>
      </div>
      <div className="mainsection">
        <div className="searchbar">
          <p>Search product here for comparison!</p>
          <input type="text" placeholder='Search'/>
          {/* <i class="fa fa-search"></i> */}
        </div>
        <div className="categories">
          {categories.map((category)=>
          <button>
            {category}
          </button>
          )}
        </div>
        <div className="Graph">
          <p>Most Selling Products</p>
          <Graph/>
        </div>
      </div>
    </div>
  )
}

export default Scrape