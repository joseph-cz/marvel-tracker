/* eslint-disable react/prop-types */


function Dropdown({phase}){
  
  function handleChange(){
    alert(phase)
  }
  
  return(
    <>
      <label htmlFor="phase-select">
        Choose a phase:
      </label>

      <select onChange={handleChange} name="phases" id="phase-select">
        <option value="">--Please select a phase</option>
        <option value="1">Phase 1</option>
        <option value="2">Phase 2</option>
        <option value="3">Phase 3</option>
      </select>
    </>
  )
}

function Poster({link,title}){
    return(
      <img 
        src={link}
        alt={title}
      />
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
}



]

//Posters are laid out using movie posters.
export default function Movie(){

  const phaseonemovies = movies.filter(movie => movie.phase===1);

  const items = phaseonemovies.map(movie=>
    <Poster key={movie.id} link={movie.link} title={movie.title} />

  );  
  
  return (
        
          <>
          <h1>Movies</h1>
          <Dropdown phase="You selected a phase" />
          
          <section>  
            <div className="showcase">
            {items}
            </div>
          </section> 
        </>
      
      
    )
}  