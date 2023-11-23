
import './App.css'
import React,{useEffect,useState} from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Cards from "./components/customCard" 
import Header from "./components/header"
import Favlist from './components/favlist';


function App() {

  
  const [display,saveDisplay] = useState([]);
  const [list,setList] = useState([]);

  

  const fetchdata=async()=>{
    const response = await fetch("https://emptycup-backend-nurul.vercel.app/api/getrecords",{
      method:'GET',
      headers:{
        "Content-type": "application/json"
      }
    });
    const res = await response.json();
    setList(res.data);
    saveDisplay(res.data);
    console.log(res.data)

  }

  const favlist=()=>{
    const tempData = list.filter(item=>item.shortlisted==true);
    console.log(tempData)
    saveDisplay(tempData);
  }

  const getList = ()=>{
    saveDisplay(list);
  }

  useEffect(()=>{
    fetchdata();
  },[])


  return (
    <>

      <Header favList = {favlist} get = {getList}></Header>
  
    <div className="items">
    {
      display.map((ele,key)=>{
      return(
      <div key = {ele._id} className={`collection${key%2==0?1:0}`}>
      <Cards data = {ele}></Cards>
      </div>
      )
      })
    }
    </div>
     
    </>
  )
}

export default App
