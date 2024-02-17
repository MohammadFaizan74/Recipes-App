import { useEffect, useState } from "react";
import Recepi from "./assets/componets/Recepi"
import Input from "./assets/componets/input"

const APP_ID = '4d784e4f';
 const APP_KEY = '1065fe05c50f940bd440761267c8f343'

const App=()=>{
   const[recepi,setrecepi]=useState([])
   const [type,setType]=useState('chicken')

  
  



  useEffect(()=>{
    fetch(`https://api.edamam.com/search?q=${type}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(res=>res.json())
      .then(data=>setrecepi(data.hits))
      .catch(err=>console.log("err",err))
},[type])
  return<div className="App">
<Input    setType={setType}/>
{recepi.map((item,idx)=>{

  return<Recepi key ={idx} {...item.recipe} />}
  )}
  


  </div>
}
export default  App