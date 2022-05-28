
import './App.css';
import Layout from './Layout';
import { useState } from 'react';
import SongDetail from './content/SongDetail';
import AddSongPopUp from './content/AddSongPopUp'

const songList=[
  {name:"song name 1"},
  {name:"song name 2"},
  {name:"song name 3"},
  {name:"song name 4"},
]


function App() {
  const [currSong,setCurrSong]=useState(null)
 const [clicked,setClicked]=useState(false)
  
  return (
    <div className="App">
     
      <Layout songs={songList} selectedSong={setCurrSong} setPopUpDisplay={setClicked}/>
      { (currSong!=null)? 
          <SongDetail selected={songList[currSong]} /> : ''}
      {clicked? <AddSongPopUp />:'b '}
    </div>
  );
}

export default App;
