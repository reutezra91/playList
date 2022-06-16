 
import React from "react";

 function Song(props){
    

    function playSong(e){
        // debugger
           props.selectedSong(e.target.id)

    }
    function deleteSong(e){
        // debugger
        props.delete2(props.obj.name)

 }
    return(
        
        <div className="track">
            <button onClick={deleteSong} className="xButton">X</button>
        <div   id={props.index} onClick={playSong}>    
        <b>{props.index+1}</b>  - {props.obj.name} <br/> {props.obj.singer}
        </div>
        
        </div>

    )
 }

 export default Song