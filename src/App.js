
import './App.css';
import Layout from './Layout';
import { useEffect, useState } from 'react';
import SongDetail from './content/SongDetail';
import AddSongPopUp from './content/AddSongPopUp'

// const songList=

function App() {
  const [currSong,setCurrSong]=useState(null)
 const [clicked,setClicked]=useState(false)
 const [newSong,setNewSong]=useState('')
 const [songList,setSongList]=useState([
  {name:"song name 1"},
  {name:"song name 2"},
  {name:"song name 3"},
  {name:"song name 4"},
]
)
const[deleteSongId,setDeleteSongId]=useState('')

 useEffect ( ()=>{
  // console.log("newSong:"+newSong)
  // setSongList(songList.push(newSong))
 newSong && setSongList([...songList,newSong])
 setClicked(false)
 },[newSong]
)

useEffect ( ()=>{

 },[deleteSongId]
)
  return (
    <div className="App">
     
      <Layout songs={songList} selectedSong={setCurrSong} setPopUpDisplay={setClicked}/>
      { (currSong!=null)? 
          <SongDetail selected={songList[currSong]} /> : ''}
          {/* <AddSongPopUp setNewSong={setNewSong} /> */}
      {clicked && <AddSongPopUp setNewSong={setNewSong} />}
    </div>
  );
}

export default App;
