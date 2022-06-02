import Song from './Song'

function SongList (props){

    return(
        <div className='songList'>
        
        {props.songs.map((element,i) => {
            return  <Song obj={element} key={i}  index={i} selectedSong={props.selectedSong}/>

        })
        }
        </div>

    )
}

export default SongList