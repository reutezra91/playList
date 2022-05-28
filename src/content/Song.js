 function Song(props){

    function playSong(e){
           props.selectedSong(e.target.id)

    }
    return(
        <div className="track"  id={props.index} onClick={playSong}>
        {props.index+1}- {props.obj.name} 

        </div>
    )
 }

 export default Song