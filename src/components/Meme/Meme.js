import React, { useState } from 'react'
import Data from '../../Data/Data'



 const Meme = () => {

  const [memeImage, setmemeImage] = useState("https://i.imgflip.com/1g8my4.jpg")


const handleClick = ()=>{
    const memesArray = Data.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setmemeImage(memesArray[randomNumber].url)
}




  return (
   <main className='bg-green-400 p-10'>
    <div className='grid grid-cols-2 gap-4'>
        <input type="text"
        placeholder='top-text'
        className='rounded-md p-3'/>
        <input type="text"
        placeholder='bottom-text'
        className='rounded-md p-3'/>
        <button className='col-start-1 col-end-4 bg-red-500 btn rounded-md p-5 pionter' onClick={handleClick}>Get a new meme image  😀</button>
    </div>

    <div>
      <img className='w-[300px] h-[300px]' src={memeImage}/>
    </div>
   </main>
  )
}


export default Meme;
