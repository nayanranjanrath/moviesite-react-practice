function Moviecard({movie}){
    function onclickfav(){
        alert("added to favourite");
    }
    return (
        <div className="moviecard">
            <div className="poster">
                <img src={movie.url} alt={movie.title} />
                <div className="overlay">
                    <button onClick={onclickfav}>Add to Favourite</button>

                </div>
            </div>
            <div className="details">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
            </div>

        </div>
    )

}

export default Moviecard