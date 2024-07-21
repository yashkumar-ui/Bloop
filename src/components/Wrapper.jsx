import React , {useState , useEffect} from "react";
import  spic from '../assets/settings.svg'
import spotify from '../assets/spotify.svg'
import camerapic from '../assets/camera.svg'
import youtube from '../assets/youtube.svg'
import instagram from '../assets/instagram.svg'
import tic from '../assets/tic.svg';

import BackgroundImage from "./BackgroundImage";
 import Comp1 from "./Comp1";
 import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
import Comp5 from "./Comp5";



function Wrapper() {
   
  const [dateTime , setDateTime ] = useState({ time : '' ,  date: '' , day: ''});
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showSpotify, setShowSpotify] = useState(false);
  const [showYoutube, setShowYoutube] = useState(false);
  const[showTicTac , setShowTicTac] = useState(false);


  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
     

      const optionsDate = { month: 'long', day: 'numeric' };
      const optionsDay = { weekday: 'long' };
      const optionsTime  = { hour: 'numeric' , minute :'numeric' }

      const time = now.toLocaleTimeString(undefined, optionsTime);
      const date = now.toLocaleDateString(undefined, optionsDate);
      const day = now.toLocaleDateString(undefined, optionsDay).slice(0,3);

      setDateTime({ time, date, day });
    };
    const intervalId = setInterval(updateDateTime, 1000);
    updateDateTime();

    return () => clearInterval(intervalId);
   }, []);


   //handle image function
  const handleImageSelect = (image) => {
    setSelectedImage(image);
     
  };

  // handle the insta page 
  const openInstagram = () => {
    window.open("https://www.instagram.com/yash_iosdev/", "_blank");
  };

  const handleToggleImageGallery = () => {
     setShowImageGallery(true);
  };

  const handleToggleCamera = () => {
    setShowCamera(true);
  };
  
  const handleToggleSpotify = () => {
    setShowSpotify(true);
  };

  const handleToggleYoutube = () => {
    setShowYoutube(true);
  }

  const handleToggleTicTac = () => {
    setShowTicTac(true);
  }

  return (
    <div className=' w-[100vw] p-0 m-0 main h-[100vh]  overflow-x-hidden overflow-hidden border-solid '>
         
         <div className="absolute w-full flex justify-between items-center px-4 bg-[#ffffff4d] py-1 text-white">
             <div className="text-md font-bold text-pretty pl-1">
                 <h3 className="">Bloop</h3>
             </div>
             <div className=" text-md md:text-sm sm:pr-2">
                 {dateTime.day} {dateTime.date}  {dateTime.time}
             </div>
         </div>
        
       <BackgroundImage selectedImage={selectedImage}/>

       <div className=" lg:hidden  w-full absolute grid  grid-cols-4 top-[4rem] mx-auto">
           <div className="flex flex-col items-center gap-2">
                <img onClick={handleToggleSpotify} className=" hover:scale-110 transition-all duration-200 cursor-pointer" src={spotify} width={55} ></img>
                <p className="text-white">Spotify</p>
           </div>

           <div className="flex flex-col items-center gap-2">
                <img onClick={handleToggleYoutube} className=" hover:scale-110 transition-all duration-200 cursor-pointer" src={youtube} width={55} ></img>
                <p className="text-white">Youtube</p>
           </div>

           <div className="flex flex-col items-center gap-2">
                <img onClick={handleToggleTicTac} className=" hover:scale-110 transition-all duration-200 cursor-pointer" src={tic} width={55} ></img>
                <p className="text-white">Tic Tac</p>
           </div>

           <div className="flex flex-col items-center gap-2">
                <img onClick={openInstagram} className=" hover:scale-110 transition-all duration-200 cursor-pointer" src={instagram} width={55} ></img>
                <p className="text-white">Instagram</p>
           </div>
       </div>



      {showImageGallery && (
         <Comp1 onSelect={handleImageSelect} setShowImageGallery={setShowImageGallery}/>
      )}

      {showCamera && (
            <Comp2  setShowCamera={setShowCamera} />
      )}
      
      {showTicTac && (
            <Comp5 setShowTicTac={setShowTicTac}/>
      )}

      {showSpotify && (
            <Comp3 setShowSpotify={setShowSpotify} />
      )}

      {showYoutube && (
            <Comp4 setShowYoutube={setShowYoutube} />
      )}


        <div className=" w-full  absolute z-50 py-3 bottom-1 flex  justify-center   ">

          <div className=" backdrop-blur bg-white/30 w-full mx-3 md:mx-0 md:w-[20rem] items-center gap-2 z-10 flex justify-around md:justify-center py-2 rounded-md border-solid">
              <div onClick={handleToggleImageGallery} >
                  <img  className="hover:-translate-y-5 hover:scale-110 transition-all duration-200 cursor-pointer"   src={spic} width={50} ></img>
              </div>

              <div onClick={handleToggleCamera} >
                  <img  className="hover:-translate-y-5 hover:scale-110 transition-all duration-200 cursor-pointer"  src={camerapic} width={50} ></img>
              </div>

              <div onClick={handleToggleSpotify}>
                   <img   className="hover:-translate-y-5 hover:scale-110 transition-all duration-200 cursor-pointer" src={spotify} width={46} ></img>
             </div>

             <div onClick={handleToggleYoutube} className="hidden md:block">
                   <img   className="hover:-translate-y-5  hover:scale-110 transition-all duration-200 cursor-pointer" src={youtube} width={56}></img>
             </div>

          </div>


       </div>


       
    </div>
  );
}

export default Wrapper
