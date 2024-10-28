/* eslint-disable react/prop-types */
import { useState } from "react"

function Dropdown(){

  
  const [phase, setPhase] = useState(1)
  const [movies, setMovie] = useState([{}])

  fetch("src/assets/movies.json")
    .then((response)=>{
      
      return response.json();
    })
    .then((json)=>{
      setMovie(json)
    })

 
  const phasemovies = movies.filter(movie => movie.phase==phase);
  const items = phasemovies.map(movie=> <Poster key={movie.id} link={movie.link} title={movie.title} name={movie.name} description={movie.description} yt={movie.yt} />);  
  function handleChange(e){
    console.log(e.target.value)
    setPhase(e.target.value)
    
  }
  
  return(
    <>
      <label htmlFor="phase-select">
        Choose a phase:
      </label>

      <select className="form-select form-select-lg mb-3" onChange={handleChange} name="phases" id="phase-select">
        <option value="">--Please select a phase</option>
        <option value="1">Phase 1</option>
        <option value="2">Phase 2</option>
        <option value="3">Phase 3</option>
      </select>
      <hr className="border border-primary border-3 opacity-75"></hr>
      <section>  
            <div className="showcase">
            {items}
            </div>
      </section> 
      <section>
        <Report />
      </section>
      
    </>
  )
}

function MovieInfo({description}){

  const [info, setInfo] = useState(false)

  function handleChange()
  {
    if (info == false)
    {
      setInfo(true)
    }
    else
    {
      setInfo(false)
    }
      
  }
  if (info == true)
  {
    return (
      <>
        <button onClick={handleChange} className="btn btn-primary">Close synopsis</button>
        <blockquote className="blockquote">
        <p>{description}</p>
        </blockquote>
      </>
    )
  }

  return (
    <>
      <button onClick={handleChange} className="btn btn-primary">Read synopsis</button>
    </>
  )
}

let initialMovies = new Set()

function Watch({name}){

  const [watchedMovie, setWatchedMovie] = useState(false);
  
  function handleChange(){
    
    
    if(initialMovies.has(name))
    {
      console.log(initialMovies)
      initialMovies.delete(name)
      setWatchedMovie(false)
    }                 
    else
    {
      initialMovies.add(name)
      setWatchedMovie(true)
    }
  }
  if(watchedMovie == true || initialMovies.has(name))
  {
    return (
      <button onClick={handleChange} className="btn btn-secondary">Watched</button>
    )
  }
  return (
    <button onClick={handleChange} className="btn btn-primary">Watch</button>
  )
}

function Trailer({link,name}){

  return(
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${link}`}>
        Watch Trailer
      </button>
      <div className="modal fade" id={link} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{name} Trailer</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center">
          <iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

function Poster({link,title,name,description,yt,id}){
    return(
      
      <div className="card border-primary mb-3">
        <img 
          className="card-img-top"
          src={link}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Info</p>
          
          <MovieInfo description={description}></MovieInfo>
          
          <Trailer link={yt} name={name} />

          <Watch name={name} />
        
        </div>
      </div>
    )
  }

function Report(){


const movieList = Array.from(initialMovies);

const displayMovies = movieList.map(movie=><li>{movie}</li>)
    return (
        <>
          <h1>Current Progress</h1>  
          <p>{initialMovies.size} movies watched:</p>
          <p>{displayMovies}</p>
        </>
    )
}


//Posters are laid out using movie posters.
export default function Movie(){

 
  return (
        
          <>
            <h1 className="display-1">Marvel Cinematic Universe Tracker</h1>
            
            <Dropdown />
            
          </>
    )
}  