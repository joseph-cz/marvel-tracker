/* eslint-disable react/prop-types */

function Poster({link,title}){
    return(
      <img 
        src={link}
        alt={title}
      />
    )
  }

export default function Movie(){
    return (
        <section>
            <h1>Movies</h1>
            <div className="showcase">
            <Poster 
                link={'src/assets/ironman1.svg'}
                title = {'Iron Man Poster'}
            />
            <Poster 
                link={'src/assets/hulk.svg'}
                title = {'Hulk Poster'}
            />
            <Poster 
                link={'src/assets/ironman2.svg'}
                title = {'Iron Man 2 Poster'}
            />
              <Poster 
                link={'src/assets/thor.svg'}
                title = {'Thor Poster'}
            />
              <Poster 
                link={'src/assets/captainamerica.svg'}
                title = {'Captain America Poster'}
            />
              <Poster 
                link={'src/assets/avengers.svg'}
                title = {'Avengers Poster'}
            />
            </div>
        </section>
    )
}  