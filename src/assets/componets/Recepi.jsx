const Recepi=({calories,image,ingredients,label})=>{
    console.log(ingredients)
    return<div className="reciperecipes">
        <h1>{label}</h1>
        <ul  >
            {ingredients.map((item,idx)=><li key={idx}>{JSON.stringify(item.text)}</li>)}
        </ul>

        <img src={image} className="image" width={250} height={300}/>
        <h2>{calories} k/cal</h2>
    </div>
}
export  default Recepi
