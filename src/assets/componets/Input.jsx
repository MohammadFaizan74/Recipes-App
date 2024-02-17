import { useEffect } from "react"
import { useState } from "react"


const Input =({setType})=>{
    
  const[search,setsearch]=useState('')


     const onSubmitHandler=(e)=>{
        e.preventDefault()
        setType(search)
        setsearch('')
        

    }
    const searchHandler=(e)=>{
        setsearch(e.target.value)
    }
    

    return <div className="search-form" >
        <form onSubmit={(e)=>onSubmitHandler(e)}>
            <input type="text" className="search-bar"  value={search}  onChange={(e)=>searchHandler(e)}/>
            <input type="submit" className="search-button" value="search"/>
        </form>

    </div>
}
export default Input