import React, { useState, useEffect } from "react";


const Meme = () => {
  const [meme, setmeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1g8my4.jpg",
  });



  function handleChange (event) {
    const {name, value} = event.target
    setmeme(prevmeme => ({
      ...prevmeme,
      [name] : value
    }))
  }

  const [allmeme, setAllmeme] = useState([])

  useEffect( ()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=> res.json())
    .then(data=> setAllmeme(data.data.memes))
  }, [])



  const handleClick = () => {
    const memesArray = allmeme;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setmeme((prevmeme) => ({
      ...prevmeme,
      randomImage: url,
    }));
  };

  return (
    <main className="h-screen bg-green-400 p-10">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="top-text" className="rounded-md p-3"
        name="topText" 
        value={meme.topText}
        onChange={handleChange}
        />

        <input
          type="text"
          placeholder="bottom-text"
          className="rounded-md p-3"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button
          className="col-start-1 col-end-4 bg-red-500 btn rounded-md p-5 pionter"
          onClick={handleClick}
        >
          Get a new meme image 😀
        </button>
      </div>

      <div className="text-center meme py-5">
        <img
          className=" meme-image w-[300px] h-[300px] mx-auto"
          alt="meme_img"
          src={meme.randomImage}
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
