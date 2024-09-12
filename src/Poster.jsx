/* eslint-disable react/prop-types */

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
}, {
  id: 2,
  name: 'Hulk',
  link: 'src/assets/hulk.svg',
  title: 'Hulk Poster',
}, {
  id: 3,
  name: 'Iron Man 2',
  link: 'src/assets/ironman2.svg',
  title: 'Iron Man 2 Poster',
}, {
  id: 4,
  name: 'Thor',
  link: 'src/assets/thor.svg',
  title: 'Thor Poster',
}, {
  id: 5,
  name: 'Captain America',
  link: 'src/assets/captainamerica.svg',
  title: 'Captain America Poster',
}, {
  id: 6,
  name: 'Avengers',
  link: 'src/assets/avengers.svg',
  title: 'Avengers Poster',
}



]

//Posters are laid out using movie posters.
export default function Movie(){
  const items = movies.map(movie=>
    <Poster key={movie.id} link={movie.link} title={movie.title} />

  );  
  
  return (
        
          <section>
            <h1>Movies</h1>
            <div className="showcase">
            {items}
            </div>
        </section> 
      
      
      
    )
}  