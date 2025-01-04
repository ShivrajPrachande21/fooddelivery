import React, { useContext } from 'react'
import './exploreMenu.css'
import {menu_list} from '../../assets/assets'
import { Foodcontext } from '../../context/Foodcontext'
const ExploreMenu = () => {
    const {categorey,setCategorey}=useContext(Foodcontext)
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Menu</h1>
        <p className='explore-menu-text'>
        Chose from deverse vierity of menu featuring deletable arry of dishes crafted with finest ingredents
        </p>
        <div className="explore-menu-list">
            {menu_list?.map((item,index)=>{
                return(
                    <>
                    <div onClick={()=>setCategorey((prev)=>prev===item.menu_name?'All':item.menu_name)} className="explore-menu-list-item">
                        <img className={categorey===item.menu_name?'active':''} src={item?.menu_image} alt="" />
                        <p>{item?.menu_name}</p>
                    </div>
                    </>

                )
            })}
        </div>
        <hr />
    </div>
  ) 
}

export default ExploreMenu