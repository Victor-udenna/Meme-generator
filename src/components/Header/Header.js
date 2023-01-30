import React from 'react'
import memeheader from "../../image/meme_header_img.webp";

 const Header = () => {
  return (
<header>
    <div className='flex items-center justify-between p-5'>

    <div className='flex items-center'>
      <div className='w-[40px]'><img  className="rounded-full" src={memeheader} alt="" /></div>
        <p className='px-3'>Meme Generator</p>
        </div>

        <div>React Course - Project 3</div>
    </div>
</header>
  )
}


export default Header;