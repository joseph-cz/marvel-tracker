/* eslint-disable react/prop-types */
import { useState } from "react"

function Dropdown(){

  const [phase, setPhase] = useState(1)


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

export function Watch({name}){

  const [watchedMovies, setWatchedMovies] = useState(initialMovies);
  
  function handleChange(){
    setWatchedMovies([...watchedMovies, 
                      {moviename:name}
                    ])
    initialMovies.add(name)
   
  }

  return (
    <button onClick={handleChange} className="btn btn-secondary">Watched</button>
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

function Poster({link,title,name,description,yt}){
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
  yt: 'https://www.youtube-nocookie.com/embed/8ugaeA-nMTc?si=P43dwbPcZOyJPWYz',
  description: "Billionaire industrialist and genius inventor Tony Stark is captured by a terrorist group while demonstrating a new weapon. Using his intellect and resourcefulness, he constructs a high-tech suit of armor to escape captivity. Upon returning home, Stark refines his suit and adopts the persona of Iron Man, using his new abilities to combat threats and protect the world.",
  phase: 1
}, {
  id: 2,
  name: 'Hulk',
  link: 'src/assets/hulk.svg',
  title: 'Hulk Poster',
  yt: 'https://www.youtube-nocookie.com/embed/xbqNb2PFKKA?si=P57xghWzYHFW25Ny',
  description: "Scientist Bruce Banner is on the run, seeking a cure for the gamma radiation accident that transforms him into a massive green monster whenever he loses his temper. As he searches for a solution, he must evade capture by the military and confront a new, formidable adversary.",
  phase: 1
}, {
  id: 3,
  name: 'Iron Man 2',
  link: 'src/assets/ironman2.svg',
  title: 'Iron Man 2 Poster',
  yt: 'https://www.youtube-nocookie.com/embed/qsRZghNciIo?si=JRrAkzWssqOQJoKt',
  description: "Tony Stark faces pressure from the government, the press, and the public to share his Iron Man technology. As he grapples with his declining health due to the arc reactor in his chest, a new adversary, Russian scientist Ivan Vanko, emerges with his own version of the technology, seeking revenge against the Stark family.",
  phase: 1
}, {
  id: 4,
  name: 'Thor',
  link: 'src/assets/thor.svg',
  title: 'Thor Poster',
  yt: 'https://www.youtube.com/embed/w1k59SJ_-Uo?si=42jhtZ9cCM75gc0G',
  description: "In Thor, the powerful but arrogant god Thor is cast out of Asgard by his father Odin and sent to Earth as punishment. Stripped of his powers, he must learn humility and find a way to reclaim his worthiness, while facing threats from his homeland and discovering the true meaning of heroism.",
  phase: 1
}, {
  id: 5,
  name: 'Captain America',
  link: 'src/assets/captainamerica.svg',
  title: 'Captain America Poster',
  yt: 'https://www.youtube.com/embed/JerVrbLldXw?si=2rkAMgJweOgbGcWU',
  description: "Steve Rogers, a frail young man eager to serve his country during World War II, undergoes a transformation into the super-soldier Captain America. Armed with his new abilities, he faces off against the sinister organization HYDRA and its leader, the Red Skull.",
  phase: 1
}, {
  id: 6,
  name: 'Avengers',
  link: 'src/assets/avengers.svg',
  title: 'Avengers Poster',
  yt: 'https://www.youtube.com/embed/eOrNdBpGMv8?si=1XHedeZeAUrAWLEU',
  description: "Earth's mightiest heroes—Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye—must come together to stop the mischievous Loki and his alien army from enslaving humanity.",
  phase: 1
},
{
  id: 7,
  name: 'Iron Man 3',
  link: 'src/assets/ironman3.svg',
  title: 'Iron Man 3 Poster',
  description: "Tony Stark faces a formidable enemy known as the Mandarin, who destroys his personal world. Stripped of his resources, Stark embarks on a quest to find those responsible, relying on his ingenuity and instincts to protect those closest to him.",
  phase: 2,
},
{
  id: 8,
  name: 'Thor: The Dark World',
  link: 'src/assets/thor2.svg',
  title: 'Thor: The Dark World Poster',
  description: "Thor must embark on a perilous journey to save the universe from the ancient Dark Elves, who seek to plunge it into darkness using a powerful weapon known as the Aether. Along the way, he reunites with Jane Foster and faces personal challenges that test his strength and resolve.",
  phase: 2,
},
{
  id: 9,
  name: 'Captain America: The Winter Soldier',
  link: 'src/assets/captainamerica2.svg',
  title: 'Captain America: The Winter Soldier Poster',
  description: "Steve Rogers, now working with S.H.I.E.L.D., faces a new threat from an enigmatic assassin known as the Winter Soldier. As he uncovers a conspiracy that threatens global security, Rogers must navigate a web of intrigue and betrayal, all while confronting a shocking revelation about his past.",
  phase: 2,
},
{
  id: 10,
  name: 'Guardians of the Galaxy',
  link: 'src/assets/gotg.svg',
  title: 'Guardians of the Galaxy Poster',
  description: "A group of intergalactic misfits, led by the charming rogue Peter Quill, must band together to stop a powerful villain from using a mysterious orb to wreak havoc across the universe.",
  phase: 2,
},
{
  id: 11,
  name: 'Avengers: Age of Ultron',
  link: 'src/assets/avengers2.svg',
  title: 'Avengers: Age of Ultron Poster',
  description: "Tony Stark and Bruce Banner’s attempt to jumpstart a dormant peacekeeping program goes awry, leading to the creation of Ultron, a powerful AI with a destructive agenda. The Avengers must reassemble to stop Ultron from enacting his catastrophic plans and save humanity.",
  phase: 2,
},
{
  id: 12,
  name: 'Ant-Man',
  link: 'src/assets/antman.svg',
  title: 'Ant-Man Poster',
  description: "Scott Lang is recruited by scientist Hank Pym to don a suit that allows him to shrink in size while increasing in strength. Together, they must pull off a heist to protect the secret of the Ant-Man technology from falling into the wrong hands.",
  phase: 2,
},
{
  id: 13,
  name: 'Captain America: Civil War',
  link: 'src/assets/captainamerica3.svg',
  title: 'Captain America Civil War Poster',
  description: "Political pressure to regulate the Avengers' activities leads to a rift between Captain America and Iron Man. As tensions rise, the team is divided, forcing the heroes to choose sides and confront each other while a new threat looms in the background.",
  phase: 3,
},
{
  id: 14,
  name: 'Doctor Strange',
  link: 'src/assets/doctorstrange.svg',
  title: 'Doctor Strange Poster',
  description: "A brilliant but arrogant neurosurgeon, Dr. Stephen Strange, suffers a career-ending injury and embarks on a journey of healing. Along the way, he discovers the hidden world of mysticism and alternate dimensions, transforming into a powerful sorcerer to protect the world from dark forces.",
  phase: 3,
},
{
  id: 15,
  name: 'Guardians of the Galaxy Vol.2',
  link: 'src/assets/gotg2.svg',
  title: 'Guardians of the Galaxy Vol.2 Poster',
  description: "The Guardians struggle to stay united as they unravel the mystery of Peter Quill's true parentage. Along the way, they face new enemies and form unexpected alliances, all while dealing with personal family issues and the threat of a powerful new adversary.",
  phase: 3,
},
{
  id: 16,
  name: 'Spider-Man: Homecoming',
  link: 'src/assets/spiderman.svg',
  title: 'Spider-Man: Homecoming Poster',
  description: "A young Peter Parker navigates his dual life as a high school student and the web-slinging superhero Spider-Man. Under the mentorship of Tony Stark, he faces the challenge of proving himself while confronting the villainous Vulture, who threatens his city.",
  phase: 3,
},
{
  id: 17,
  name: 'Thor: Ragnarok',
  link: 'src/assets/thor3.svg',
  title: 'Thor: Ragnarok Poster',
  description: "Thor finds himself imprisoned on the other side of the universe without his mighty hammer. He must race against time to return to Asgard and stop the powerful Hela from bringing about Ragnarok, the destruction of his home world and the end of Asgardian civilization.",
  phase: 3,
},
{
  id: 18,
  name: 'Black Panther',
  link: 'src/assets/blackpanther.svg',
  title: 'Black Panther Poster',
  description: "T'Challa returns to his homeland of Wakanda to take his place as king. However, he soon faces a powerful adversary who challenges his leadership and threatens the future of Wakanda. T'Challa must harness the power of the Black Panther to protect his people and their way of life.",
  phase: 3,
},
{
  id: 19,
  name: 'Avengers: Infinity War',
  link: 'src/assets/avengers3.svg',
  title: 'Avengers: Infinity War Poster',
  description: "The Avengers and their allies must unite to stop the powerful Thanos from collecting all six Infinity Stones, which he plans to use to impose his twisted will on the universe. The fate of Earth and existence itself hangs in the balance as they face their most formidable enemy yet.",
  phase: 3,
},
{
  id: 20,
  name: 'Ant-Man and the Wasp',
  link: 'src/assets/antman2.svg',
  title: 'Ant-Man and the Wasp Poster',
  description: "Scott Lang struggles to balance his responsibilities as a superhero and a father. When Hope van Dyne and Dr. Hank Pym present him with an urgent new mission, he must once again don the Ant-Man suit and team up with the Wasp to uncover secrets from their past and face a formidable new enemy.",
  phase: 3,
},
{
  id: 21,
  name: 'Captain Marvel',
  link: 'src/assets/captainmarvel.svg',
  title: 'Captain Marvel Poster',
  description: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. As she uncovers her past and embraces her destiny, she must harness her newfound powers to protect the planet.",
  phase: 3,
},
{
  id: 22,
  name: 'Avengers: Endgame',
  link: 'src/assets/avengers4.svg',
  title: 'Avengers: Endgame Poster',
  description: "the surviving Avengers and their allies must come together to undo the catastrophic events caused by Thanos. With the universe in ruins, they embark on a final mission to restore balance and bring back those who were lost.",
  phase: 3,
},
{
  id: 23,
  name: 'Spider-Man: Far From Home',
  link: 'src/assets/spiderman2.svg',
  title: 'Spider-Man: Far From Home Poster',
  description: "Peter Parker goes on a school trip to Europe, hoping to leave his superhero duties behind. However, his plans are disrupted when Nick Fury recruits him to battle mysterious elemental creatures alongside a new ally, Mysterio.",
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