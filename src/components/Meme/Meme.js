import React from 'react'

 const Meme = () => {
  return (
   <main className='bg-green-400 p-10'>
    <form className='grid grid-cols-2 gap-4'>
        <input type="text"
        placeholder='top-text'
        className='rounded-md p-3'/>
        <input type="text"
        placeholder='bottom-text'
        className='rounded-md p-3'/>
        <button className='col-start-1 col-end-4 bg-red-500 btn rounded-md p-5 pionter'>Get a new meme image  😀</button>
    </form>
   </main>
  )
}


export default Meme;
