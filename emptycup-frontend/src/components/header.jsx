import React from 'react'
import logo from "../assets/logo.svg"
import menu from "../assets/menu.svg"
import m1 from "../assets/m1.svg"
import m2 from "../assets/m2.svg"
import m3 from "../assets/m3.svg"
import m4 from "../assets/m4.svg"
import m5 from "../assets/m5.svg"
import {Link} from "react-router-dom";

const Header = (props) => {

    const {favList,get} = props;



  return (
    <div className='pt-4'>

        <div className="row text-center border-bottom pb-4 header">
            <div className="col-2 p-0 m-0 logo">
                <img src={logo}  alt="logo" />
            </div>
            <div className="col-8 logoname">
                <h1>EmptyCup</h1>
            </div>
            <div className="col-2 menu">
                <button type="button"><img src={menu} alt="menu" /></button>
            </div>
        </div>

        <div className="row my-4  menuBar">

            <div className="col-6 d-flex justify-content-around">
                <button type='button' onClick={()=>get()}><img src={m1} alt="course" /></button>
                <button ><img src={m2} alt="Gallery" /></button>
                <button ><img src={m3} alt="Map" /></button> 
            </div>
            <div className="col-6 d-flex justify-content-end pe-2">
                <button type='button' onClick={()=>favList()}><img src={m4} alt="sortlist" /></button>
                <button ><img src={m5} alt="Sort" /></button>
            </div>  

        </div>
      
    </div>
  )
}

export default Header
