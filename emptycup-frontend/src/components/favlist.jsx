import React from 'react'
import Cards from "./customCard"

const Favlist = (props) => {

  let data = props.data;

  data = data.filter(item=>item.shortlisted==true)

  return (
    <div className="items">
    {
      data.map((ele,key)=>{
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

export default Favlist
