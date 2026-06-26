import Moviecard from "../component/moviecart";
import { useState } from "react";
function Home(){
    const[seachqueery,setseachqueery]=useState("")
    const movies=[
        {id:1,title:"thor",description:"grate movie"},
        {id:2,title:"spiderman",description:"spider man is op"},
        {id:3,title:"avengers",description:"watch this right now"},
        {id:4,title:"ironman",description:"wooooow "},
    ]
    const handelsearch=(e)=>{
        alert(seachqueery)


    }
    return(
        <div className="home">
            <form onSubmit={handelsearch} className="searchform">
                <input type="text" placeholder="search" className="sesrchinput" value={seachqueery} onChange={(e)=>{setseachqueery(e.target.value)}}></input>
                <button type="submit" className="searchbutton">seach</button>
            </form>

            <div className="moviegrid">{movies.map((movie)=>
                 (movie.title.toLowerCase().startsWith(seachqueery)&&<Moviecard movie={movie} key={movie.id}></Moviecard>)
            )}</div>
        </div>
    )




}


export default Home