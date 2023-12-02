
import './App.css';
import React,{useEffect,useState} from 'react';
import Cards from "./components/customCard"; 
import Header from "./components/header";
import Spinner from './components/spinner';
import List from "./components/list"



function App() {

  
  const [display,saveDisplay] = useState([]);
  const [list,setList] = useState([]);
  const [loading,setLoading] = useState(true);

  const fetchdata=async()=>{
    try{const response = await fetch("https://enmptycup-backend-nurulhasan.onrender.com/api/get",{
      method:'GET',
      headers:{
        "Content-type": "application/json"
      }
    });
    const res = await response.json();
    setList(res.data);
    saveDisplay(res.data);
    setLoading(false);
    console.log(res.data)
  }catch(err){
    console.log(err);
  }

  }

  // for setting display favlist or saved ones
  const favlist=()=>{
    const tempData = list.filter(item=>item.shortlisted==true);
    saveDisplay(tempData);
  }


  // for setting display list to original or full list
  const getList = ()=>{
    saveDisplay(list);
  }


  // for loading list from sever
  useEffect(()=>{
    fetchdata();
  },[])


  return (
    <>

    <Header favList = {favlist} get = {getList}></Header>

    {loading && <Spinner></Spinner>}
    <List display={display}></List>
     
    </>
  )
}

export default App
