import pictures from "./pictures.js";
import Bar from "./bar.jsx";

function PhotoFrame() {

  return (
    <>
    <div className="">
      <h2 className="text-3xl font-bold pt-10 mx-auto">Our Products</h2>
      <div className="p-14 h-98 w-4/5 rounded-2xl gap-7">
      {pictures.map((picture, index) => (
        <img className="rounded-2xl w-11/12" key={index} src={`src/images/${picture.image}.jpg`} alt={picture.name} />
      ))}
      </div>
      <Bar />
      </div>
    </>
  )
}

export default PhotoFrame;