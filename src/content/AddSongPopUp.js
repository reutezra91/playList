

function AddSongPopUp(props){
    const addSong= (e)=>{
        e.preventDefault()
        const songObj={
            name: e.target.elements.songName.value

        }
        props.setNewSong(songObj)
        console.log("111"+songObj)

    }
    return(
        <div className="addSongPopUp">
            <form onSubmit={addSong} >
            <input type="text" name="songName" placeholder="enter song name" required/>
            <button type="submit"> Submit </button>
            </form>
        </div>

    )
}

export default AddSongPopUp