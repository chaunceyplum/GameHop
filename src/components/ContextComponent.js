import React, {useState, createContext} from 'react';

export const CartContext = React.createContext()

export const CartProvider = ({children}) => {
  
  const [cart, setCart] = useState([]);
  const [games] = useState([
    {
        name:"Halo infinite",
        releaseDate:"December 8, 2021",
        description:"The legendary Halo series returns with the most expansive Master Chief campaign yet and a ground-breaking free to play multiplayer experience.",
        details:"Halo Infinite provides an amazing experience across the Xbox One and newer family of consoles as well as PC with stunning 4K graphics and world-class cross-platform play. And, on Xbox Series X as well as supported PCs, enjoy enhanced features like up to 120 FPS and greatly reduced load times creating seamless gameplay that usher in the next generation of gaming",
        img:"./images/Halo.jpeg",
        id:"0",
        price:65
    },
    {
        name:'Call of Duty: VANGUARD',
        releaseDate:'November 5, 2021',
        description:'The critically-acclaimed Call of Duty franchise returns with Call of Duty: Vanguard, in which players will experience global combat through the eyes of heroes of World War II and the fateful events that brought them together. Developed by Sledgehammer Games, Vanguard is a deeply engaging narrative, featuring a select group of soldiers from different countries and backgrounds who rise together to meet the world’s gravest threat, change the fortunes of the war and set the table for what we know today as special forces combat.  ',
        details:"Through the remarkable journey of these steeled soldiers, players will experience influential battles of World War II as they fight for victory across multiple theaters of war – the Eastern and Western Fronts of Europe, the Pacific and North Africa.",
        img:"./images/Vanguard.jpeg",
        id:"1",
        price:65
    },
    {
        name:'New World',
        releaseDate:'September 28, 2021',
        description:'In Amazon Game Studio’s open world MMO, you find yourself shipwrecked on the magical island of Aeternum, and must level up your character to survive and become more powerful. There’s no automatic targeting, so you have to aim your attacks and counter your enemies in real time, using guns, swords, and magic.',
        details:"There are also no classes in New World – instead, you assign skill points to your personal attributes as you level up, and improve your New World weapon and trade skills the more you perform them. If you’re waiting to get into one of the busy New World servers, take a look at our New World beginner’s guide, and find out how to play with friends in New World.",
        img:"./images/New-World.jpeg",
        id:"2",
        price:40
    },
    {
        name:'Forza Horizon 5',
        releaseDate:'November 5, 2021',
        description:'You’ve got the green light to start pre-loading Forza Horizon 5, Playground Games’ open-world game set in the jungles, deserts, and beaches of Mexico.',
        details:"you can pre-load Forza Horizon 5 in its entirety via either Steam, the Microsoft Store, or the Xbox app for PC if you’ll be playing it on Game Pass for PC. That way, you’ll be ready to hit the tarmac (and every other conceivable surface material) hard when the Forza Horizon 5 release date arrives November 5.",
        img:"./images/forza-Horizon5.jpeg",
        id:"3",
        price:65
    }
    
])
  return (
    <CartContext.Provider value={[cart, setCart][games]}>
      {children}
    </CartContext.Provider>
  )
}