
import React from "react";

function AddSongPopUp(props){
    const addSong= (e)=>{
        e.preventDefault()
        const songObj={
            name:e.target.elements.songName.value, id:props.nextId, videoSrc:{type:"video" , sources:[{ src: e.target.elements.songId.value, provider:"youtube"}]}
            
            // id:props.nextId,
            

        }
        props.setNewSong(songObj)
       

    }
    return(
        <div className="addSongPopUp">
            <form onSubmit={addSong} >
                <h1>Add song to your playlist:</h1>
            <input type="text" name="songName" placeholder="enter song name" required/>
            <input type="text" name="songId" placeholder="enter song id" required/>
            <br/>
            <button type="submit"> Submit </button>
            </form>
        </div>

    )
}

export default AddSongPopUp