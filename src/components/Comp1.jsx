import React, {  useRef , useState} from 'react'
import Moveable from 'react-moveable';
import wallpaper1 from '../assets/macos.jpg';
import wallpaper2 from '../assets/wallpaper1.jpg';
import wallpaper3 from '../assets/wallpaper2.jpg';
import wallpaper4 from '../assets/wallpaper3.jpg';
import wallpaper5 from '../assets/wallpaper4.jpg';
import wallpaper6 from '../assets/wallpaper5.jpg';
import wallpaper7 from '../assets/wallpaper7.jpg';
import wallpaper8 from '../assets/wallpaper8.jpg';
import wallpaper9 from '../assets/hannah.png';
import { RxCross2 } from "react-icons/rx";
import { RiSubtractLine } from "react-icons/ri";
import { MdCloseFullscreen } from "react-icons/md";

// wallpaper component

const Comp1 = ({ onSelect, setShowImageGallery }) => {

   const comp1Ref = useRef(null);

   // function button logic 
   const [isHovered, setIsHovered] = useState(false);

   const handleMouseEnter = () => setIsHovered(true);
   const handleMouseLeave = () => setIsHovered(false);


//  image logic
   
    const images = [ wallpaper1, wallpaper2, wallpaper3 , wallpaper4, wallpaper5, wallpaper6, wallpaper7, wallpaper8, wallpaper9 ];

    const handleClick = (image) => {
    onSelect(image);
    };
 
    function closeHandler(){
        setShowImageGallery(false);
    } 



  return (

    <div  className='w-[100vw] h-[100vh]'>

        <div  ref={comp1Ref} id='box' className='md:w-[800px] mx-1  w-12/12 top-0 md:top-[5%] md:mx-auto left-0 right-0    absolute cursor-pointer h-[99%] md:h-[36rem] bg-[#2e2e2ecc] flex justify-center items-center'>
           <div  className='w-[100%] h-[100%]'  >
              <div className="w-full h-full px-[1rem] md:px-[2rem] py-4">
                
                <div className='w-full flex '>
                   <div className='flex  w-[45%] '>
                       <div className='flex gap-1 ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <button onClick={closeHandler} onTouchStart={closeHandler}  className='mb-3 rounded-full flex items-center justify-center border-black sm:w-3 w-[1.2rem] h-[1.2rem] sm:h-3 bg-[#FF0000] '> <RxCross2 className={ `w-3 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`} /> </button>
                            <button className='mb-3 rounded-full border-black sm:w-3 w-[1.2rem] h-[1.2rem] sm:h-3 bg-[#FFEA00] flex justify-center items-center '> <RiSubtractLine className={`w-3 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}/></button>
                            <button  className='mb-3 rounded-full border-black sm:w-3 w-[1.2rem] h-[1.2rem] sm:h-3 bg-[#7CFC00] flex justify-center items-center'> <MdCloseFullscreen  className={`w-3 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}/> </button>

                       </div>

                   </div>
                    
                    <div  className='text-white leading-3 text-xl sm:text-[1rem] font-[200]'>Settings</div>

                </div>

                  <h1 className='text-white leading-3 font-[200] text-sm mt-2'>Choose wallpaper</h1>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3  md:h-auto">
                       {images.map((image, index) => (
                         <img
                          key={index}
                          src={image}
                          alt="image"
                          loading='lazy'
                          onClick={() => handleClick(image)}
                          onTouchStart={() => handleClick(image)}
                          className='w-full h-[9rem] rounded-md object-cover cursor-pointer'
                          />
                        ))}
                    </div>
              </div>
           </div>
        </div>

          <Moveable
            target={comp1Ref}
            draggable={true}
            throttleDrag={1}
            edgeDraggable={false}
            startDragRotate={0}
            throttleDragRotate={0}
            onDrag={(e) => {
               e.target.style.transform = e.transform;
            }}
            />


 
    </div>

  )
}

export default Comp1