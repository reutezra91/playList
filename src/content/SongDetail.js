

function SongDetail (props){

    return(
        <div className="songDetails">
            <h1>Now playing:</h1>
           {props.selected.name} 
        
        </div>

    )
}

export default SongDetail