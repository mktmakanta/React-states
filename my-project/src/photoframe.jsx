import pictures from "./pictures.js";
import { useState } from "react";


function PhotoFrame() {

  const [ imagePresent, okImage] = useState(0);

function handleNextClick(){
  okImage(imagePresent + 1);
}
function handlePreviousClick(){
  okImage(imagePresent === 0 ? pictures[0] : imagePresent - 1);
}
  let image = pictures[imagePresent];
  return (
    <>
    <div className="">
      <h2 className="">Our Products</h2>
      <div className="p-5 h-98 w-screen rounded-2xl">
        <img className="h-98 w-10/12 mx-auto rounded-2xl" key={image.id} src={`src/images/${image.image}.jpg`} alt={image.name} />
      </div>
      </div>
      
      <div className="grid grid-cols-4 text-2xl mt-10 justify-between mx-16 font-bold bg-slate-300 py-4 px-5 items-center text-center ">
        <button className="bg-slate-100 p-2 rounded-md col-span-1" onClick={handlePreviousClick} >Previous</button>
        <div className="uppercase font-bold col-span-2">{image.name}</div>
        <button  className="bg-slate-100 p-2 rounded-md col-span-1" onClick={handleNextClick}>Next</button>
      </div>

    </>
  )
}

export default PhotoFrame;