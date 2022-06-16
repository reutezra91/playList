import React from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css"

function SongDetail (props){
// debugger
    return(
        
        <div className="songDetails">
            {/* <h1>Now playing:</h1>
        
           {props.selected.name} 
           <br/>
            {props.selected.singer} */}
            <Plyr  source={props.selected.videoSrc}/>
        
            
        </div>

    )
}

export default SongDetail