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
    <div className=" bg-slate-300   ">
      <div className="p-5 h-fit w-screen rounded-2xl ">
      <h2 className="text-center mt-10 font-bold text-3xl">Our Products</h2>
        <img className="h-98 w-10/12 mx-auto rounded-2xl mt-5" key={image.id} src={`src/images/${image.image}.jpg`} alt={image.name} />
      </div>
      </div>
      
      <div className="grid grid-cols-4 text-2xl mt-2 justify-between  font-bold w-screen bg-slate-300 py-4 px-5 items-center text-center ">
        <button className="bg-slate-100 p-2 rounded-md col-span-1" onClick={handlePreviousClick} >Previous</button>
        <div className="uppercase font-bold col-span-2">{image.name}</div>
        <button  className="bg-slate-100 p-2 rounded-md col-span-1" onClick={handleNextClick}>Next</button>
      </div>

    </>
  )
}

export default PhotoFrame;