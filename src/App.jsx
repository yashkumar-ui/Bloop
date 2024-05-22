import React, { useEffect, useState } from 'react'
import './App.css'
import Wrapper from './components/Wrapper';
import wallpaper from './assets/wallpaper.jpg';
import splash from './assets/splash.gif';

const App = () => {
  const[showWrapper , setShowWrapper] = useState(false);

  const myStyle = {
    backgroundImage: `url(${wallpaper})`,
    height:"full",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
}

  useEffect( () => {
    const timer = setTimeout( () => {
      setShowWrapper(true);
    }, 4000);
    //cleanup
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className='w-[100vw] h-[100vh] '>
        {
          !showWrapper && (
            <div style={myStyle}  className='w-full h-full'>
               <div className='w-full h-full flex justify-center items-center'>
                  <img src={splash} alt='bloop' />
               </div>
            </div>
          )
        }
        {showWrapper && <Wrapper/>}

    </div>
  )
}

export default App