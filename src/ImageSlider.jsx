import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, CircleDot, CircleIcon } from "lucide-react";

export function ImageSlider({ imageUrls }) {
  const [index, setIndex] = useState(0);

  function nextimage() {
    setIndex(index=>{
        if(index===imageUrls.length-1){
            return 0
        }
        return index+1

    })
  }

  function prevImage() {
    setIndex(index=>{
        if(index===0){
            return imageUrls.length-1
        } 
        return index -1
    })
  }

  return (
    <div className="w-[100%] h-[100%] relative">
              <div className="flex h-full overflow-hidden">
        {imageUrls.map((url, i) => (
          <img
            key={url}
            src={url}
            className="object-cover w-full h-full block flex-shrink-0 flex-grow-0 transition-all duration-300 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
            alt={`Image ${i + 1}`}
          />
        ))}
      </div>
   
      <button className="block absolute top-0 bottom-0 p-[1rem] cursor-pointer l-0 left-0 transition ease-in-out delay-150 bg-transparent hover:bg-slate-800/50 hover:animate-squich hover:transition hover:ease-in-out duration-200"  onClick={prevImage}>
        <ArrowBigLeft className="text-white" />

      </button>
      <button className="block absolute top-0 bottom-0 p-[1rem] cursor-pointer l-0 right-0 transition ease-in-out delay-150 bg-transparent hover:bg-slate-800/50 hover:animate-squich hover:transition hover:ease-in-out duration-200" onClick={nextimage}>
      <ArrowBigRight className="text-white" />

      </button>
      <div className="absolute bottom-2 left-[50%] -translate-x-2/4 flex gap-1">
        {imageUrls.map((_,i)=>(
            <button key={i} className="block p-4 cursor-pointer transition-all w-4 h-4" onClick={()=>setIndex(i)}>{i==index?<CircleDot className="stroke-white fill-black h-full w-full hover:scale-125"/>:<CircleIcon className="stroke-white fill-black h-full w-full hover:scale-125" />}</button>
        ))}
      </div>
    </div>
  );
}
