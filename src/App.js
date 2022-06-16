
import './App.css';
import Layout from './Layout';
import { useEffect, useState } from 'react';
import SongDetail from './content/SongDetail';
import AddSongPopUp from './content/AddSongPopUp'
import React from "react";
import Search from './content/Search';




// const songList=

function App() {
 
  const [currSong,setCurrSong]=useState(null)
 const [clicked,setClicked]=useState(false)
 const [newSong,setNewSong]=useState('')
 const [songList,setSongList]=useState([
  {name:"Happy Birthday",  videoSrc:{type:"video" , sources:[{ src: "nl62hhiBMOM", provider:"youtube"}]}},
  {name:"Strawberry Fields Forever", videoSrc:{type:"video" ,sources:[{ src: "HtUH9z_Oey8", provider:"youtube"}]}},
  {name:"Sunshine" , videoSrc:{type:"video" ,sources:[{src: "Jbch_x5132o", provider:"youtube"}]}},
  {name:"Imagine", videoSrc:{type:"video" ,sources:[{src:"YkgkThdzX-8", provider:"youtube"}]}},
]
)
const [deletedSong,setDeletedSong]=useState(null)


 useEffect ( ()=>{
  // console.log("newSong:"+newSong)
  // setSongList(songList.push(newSong))
 newSong && setSongList([...songList,newSong])
 setClicked(false)
 },[newSong]
)

useEffect ( ()=>{
 var newList=songList.filter((v)=> v.name !== deletedSong)
 console.log(newList)
 deletedSong &&
    setSongList(newList)

 },[deletedSong]
)

  return (
    <div className="App">
      <Search/>
      <Layout songs={songList} selectedSong={setCurrSong} setPopUpDisplay={setClicked} delete={setDeletedSong}/>
      { (currSong!=null)? 
      <SongDetail selected={songList[currSong]} /> : ''}
      {clicked && <AddSongPopUp setNewSong={setNewSong} nextId={songList.length} />}
      
   
    </div>
  );
}

export default App;
