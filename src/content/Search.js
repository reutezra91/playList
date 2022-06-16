import React from 'react'




function Search(props) {

const  getSearchResult= (queryParam)=>{
    console.log("got into getSearchResult()")

        // const setSearchNet=props.setSearchNet
        const setSearchNet=[]
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        //         'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
        //     }
        // };
    
    // fetch('https://simple-youtube-search.p.rapidapi.com/search?query=never%2Bgonna%2Bgive%2Byou%2Bup&safesearch=false', options)
         fetch('localHost/4000/search/'+queryParam)
        .then(response => response.json())
        .then(response => console.log(response))
        .then((data) => {
            setSearchNet(data)
            console.log(data)
            
        })
       
        .catch(err => console.error(err));
    }
    
    const goSrc =(e)=>{
        console.log(e)
        console.log("got into goSrc()")
        debugger
        const arr = getSearchResult(e.target.value)
    }

    return (
    <div>
        search:
        <input type="text" name="searchPhrase" onChange={goSrc}></input>
        {/* <button id="btnSrc" onClick={goSrc()}>חיפוש</button> */}
    </div>
  )
}

export default Search