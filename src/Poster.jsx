/* eslint-disable react/prop-types */
import { useState } from "react"

function Dropdown(){

  const [phase, setPhase] = useState(1)


  const phasemovies = movies.filter(movie => movie.phase==phase);
  const items = phasemovies.map(movie=> <Poster key={movie.id} link={movie.link} title={movie.title} name={movie.name} />);  
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
      
    </>
  )
}

function Poster({link,title,name}){
    return(
      
      <div className="card border-primary mb-3">
        <img 
          className="card-img-top"
          src={link}
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Synopsis</p>
          <a href="#" className="btn btn-primary">More info</a>
        </div>
      </div>
    )
  }

//Temporary storage for Movie information
const movies = [{
  id: 1,
  name: 'Iron Man',
  link: "src/assets/ironman1.svg",
  title: "Iron Man Poster",
  phase: 1
}, {
  id: 2,
  name: 'Hulk',
  link: 'src/assets/hulk.svg',
  title: 'Hulk Poster',
  phase: 1
}, {
  id: 3,
  name: 'Iron Man 2',
  link: 'src/assets/ironman2.svg',
  title: 'Iron Man 2 Poster',
  phase: 1
}, {
  id: 4,
  name: 'Thor',
  link: 'src/assets/thor.svg',
  title: 'Thor Poster',
  phase: 1
}, {
  id: 5,
  name: 'Captain America',
  link: 'src/assets/captainamerica.svg',
  title: 'Captain America Poster',
  phase: 1
}, {
  id: 6,
  name: 'Avengers',
  link: 'src/assets/avengers.svg',
  title: 'Avengers Poster',
  phase: 1
},
{
  id: 7,
  name: 'Iron Man 3',
  link: 'src/assets/ironman3.svg',
  title: 'Iron Man 3 Poster',
  phase: 2,
},
{
  id: 8,
  name: 'Thor: The Dark World',
  link: 'src/assets/thor2.svg',
  title: 'Thor: The Dark World Poster',
  phase: 2,
},
{
  id: 9,
  name: 'Captain America: The Winter Soldier',
  link: 'src/assets/captainamerica2.svg',
  title: 'Captain America: The Winter Soldier Poster',
  phase: 2,
},
{
  id: 10,
  name: 'Guardians of the Galaxy',
  link: 'src/assets/gotg.svg',
  title: 'Guardians of the Galaxy Poster',
  phase: 2,
},
{
  id: 11,
  name: 'Avengers: Age of Ultron',
  link: 'src/assets/avengers2.svg',
  title: 'Avengers: Age of Ultron Poster',
  phase: 2,
},
{
  id: 12,
  name: 'Ant-Man',
  link: 'src/assets/antman.svg',
  title: 'Ant-Man Poster',
  phase: 2,
},
{
  id: 13,
  name: 'Captain America: Civil War',
  link: 'src/assets/captainamerica3.svg',
  title: 'Captain America Civil War Poster',
  phase: 3,
},
{
  id: 14,
  name: 'Doctor Strange',
  link: 'src/assets/doctorstrange.svg',
  title: 'Doctor Strange Poster',
  phase: 3,
},
{
  id: 15,
  name: 'Guardians of the Galaxy Vol.2',
  link: 'src/assets/gotg2.svg',
  title: 'Guardians of the Galaxy Vol.2 Poster',
  phase: 3,
},
{
  id: 16,
  name: 'Spider-Man: Homecoming',
  link: 'src/assets/spiderman.svg',
  title: 'Spider-Man: Homecoming Poster',
  phase: 3,
},
{
  id: 17,
  name: 'Thor: Ragnarok',
  link: 'src/assets/thor3.svg',
  title: 'Thor: Ragnarok Poster',
  phase: 3,
},
{
  id: 18,
  name: 'Black Panther',
  link: 'src/assets/blackpanther.svg',
  title: 'Black Panther Poster',
  phase: 3,
},
{
  id: 19,
  name: 'Avengers: Infinity War',
  link: 'src/assets/avengers3.svg',
  title: 'Avengers: Infinity War Poster',
  phase: 3,
},
{
  id: 20,
  name: 'Ant-Man and the Wasp',
  link: 'src/assets/antman2.svg',
  title: 'Ant-Man and the Wasp Poster',
  phase: 3,
},
{
  id: 21,
  name: 'Captain Marvel',
  link: 'src/assets/captainmarvel.svg',
  title: 'Captain Marvel Poster',
  phase: 3,
},
{
  id: 22,
  name: 'Avengers: Endgame',
  link: 'src/assets/avengers4.svg',
  title: 'Avengers: Endgame Poster',
  phase: 3,
},
{
  id: 23,
  name: 'Spider-Man: Far From Home',
  link: 'src/assets/spiderman2.svg',
  title: 'Spider-Man: Far From Home Poster',
  phase: 3,
}



]

//Posters are laid out using movie posters.
export default function Movie(){

 
  return (
        
          <>
            <h1 className="display-1">Marvel Cinematic Universe Tracker</h1>
            
            <Dropdown />
            
          </>
    )
}  