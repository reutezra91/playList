// import SongDetail from './content/SongDetail'
import SongList from './content/SongList'
import './Layout.css'
import React, { useState } from "react";




function Layout(props){
    const [searchNet,setSearchNet]=useState()
    return(
        <div className='nav'>        
        <SongList songs={props.songs} selectedSong={props.selectedSong} delete1={props.delete} />
        <button onClick={()=> {props.setPopUpDisplay(true)}}>Add song</button>
        
        </div>
    )
}

export default Layout