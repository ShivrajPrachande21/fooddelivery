import React, { useContext } from 'react'
import './foodDisplay.css'
import { Foodcontext } from '../../context/Foodcontext'
import FoodItem from '../foodItem/FoodItem'
const FoodDisplay = () => {
    const {categorey,  food_list}=useContext(Foodcontext)
    
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes for you</h2>
        <div className="food-display-list">
             <FoodItem/>
        </div>
    </div>
  )
}

export default FoodDisplay