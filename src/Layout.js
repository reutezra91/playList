import SongDetail from './content/SongDetail'
import SongList from './content/SongList'
import './Layout.css'


function Layout(props){

    return(
        <div className='nav'>        
        <SongList songs={props.songs} selectedSong={props.selectedSong}/>
        <button onClick={()=> {props.setPopUpDisplay(true)}}>Add song</button>
        </div>
    )
}

export default Layout