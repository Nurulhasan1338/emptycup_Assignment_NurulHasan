import React from 'react'
import Cards from "./customCard"

const List = (props) => {


  return (
    <div className="items">
    {
      props.display.map((ele,key)=>{
      return(
      <div key = {ele._id} className={`collection${key%2==0?1:0}`}>
      <Cards data = {ele}></Cards>
      </div>
      )
      })
    }
    </div>
  )
}

export default List
