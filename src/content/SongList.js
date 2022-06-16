import Song from './Song'
import React from "react";

function SongList (props){

    return(
        <div className='songList'>
        
        {props.songs.map((element,i) => {
            return  <Song obj={element} key={i}  index={i} selectedSong={props.selectedSong} delete2={props.delete1} />

        })
        }
        </div>

    )
}

export default SongList