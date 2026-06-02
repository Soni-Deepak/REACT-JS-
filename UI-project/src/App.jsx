import React from 'react'
import  Card  from"./components/Card";

const App = () => {

  const marvelHeroes = [
  {
    name: "Iron Man",
    image: "https://tse4.mm.bing.net/th/id/OIP.IWmIGLTQSvld7TSkW_iI_wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    job: "Genius Inventor & Avenger",
    qualification1: "Master Engineer",
    qualification2: "Expert Strategist",
    qualification3: "Advanced Armor Designer",
    description:
      "A billionaire inventor who protects Earth using powerful armored suits."
  },
  {
    name: "Captain America",
    image: "https://wallpapers.com/images/hd/marvel-captain-america-avenger-csbfpja79vzzvkao.jpg",
    job: "Super Soldier & Leader",
    qualification1: "Peak Human Strength",
    qualification2: "Leadership Skills",
    qualification3: "Combat Expertise",
    description:
      "A courageous leader dedicated to justice, freedom, and protecting humanity."
  },
  {
    name: "Thor",
    image: "https://wallpaperaccess.com/full/5569762.jpg",
    job: "God of Thunder",
    qualification1: "Thunder Manipulation",
    qualification2: "Immense Strength",
    qualification3: "Mjolnir Mastery",
    description:
      "An Asgardian prince wielding thunder and defending realms from powerful threats."
  },
  {
    name: "Spider-Man",
    image: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Download-Spiderman-Wallpaper.jpeg",
    job: "Friendly Neighborhood Hero",
    qualification1: "Wall Crawling",
    qualification2: "Spider Sense",
    qualification3: "Scientific Intelligence",
    description:
      "A young hero balancing everyday life while protecting New York City."
  },
  {
    name: "Black Panther",
    image: "https://wallpaperaccess.com/full/15867.jpg",
    job: "King of Wakanda",
    qualification1: "Enhanced Agility",
    qualification2: "Brilliant Tactician",
    qualification3: "Vibranium Expertise",
    description:
      "A noble king using advanced technology and skills to defend Wakanda."
  },
  {
    name: "Doctor Strange",
    image: "https://th.bing.com/th/id/OIP.ap0uUVxGr85bKQuLbGlNcwHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    job: "Master of Mystic Arts",
    qualification1: "Spell Casting",
    qualification2: "Dimensional Travel",
    qualification3: "Ancient Knowledge",
    description:
      "A sorcerer safeguarding reality from mystical and interdimensional dangers."
  },
  {
    name: "Hulk",
    image: "https://wallpapercave.com/wp/XdubWX1.jpg",
    job: "Scientist & Avenger",
    qualification1: "Unlimited Strength",
    qualification2: "High Durability",
    qualification3: "Scientific Genius",
    description:
      "A brilliant scientist transformed into a powerful green unstoppable force."
  },
  {
    name: "Black Widow",
    image: "https://tse1.mm.bing.net/th/id/OIP._KbHv7exBdhTu5jZnsHMWwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    job: "Spy & Assassin",
    qualification1: "Espionage Skills",
    qualification2: "Martial Arts Mastery",
    qualification3: "Stealth Operations",
    description:
      "A highly trained spy excelling in intelligence gathering and combat."
  }
];

// console.log(marvelHeroes);
  return ( 
    <div>
   
     <div className="parent">
      {marvelHeroes.map(function(elem , idx){
        return <div key = {idx}>
          <Card name ={elem.name} image = {elem.image} job = {elem.job} qualification1 = {elem.qualification1} qualification2 = {elem.qualification2} qualification3 = {elem.qualification3} para = {elem.description} />
        </div>
      })}
      
     </div>
    
    </div>
  )
}

export default App
