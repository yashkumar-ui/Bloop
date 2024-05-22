import React,{ useRef , useState, useEffect } from 'react'
import Moveable from 'react-moveable';
import { RxCross2 } from "react-icons/rx";
import { RiSubtractLine } from "react-icons/ri";
import { MdCloseFullscreen } from "react-icons/md";

// camera component

const Comp2 = ({ setShowCamera}) => {

  const comp2Ref = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing the camera:', error);
    }
  };


  useEffect(() => {

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach(track => {
          track.stop();
        });
      }
    };
  }, [] );

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)

    const dataURL = canvas.toDataURL('image/png');
    setCapturedImage(dataURL);
  };

  const handleRetake = () => {
    setCapturedImage(null);
    startCamera();
  };

  function closeHandler(){
     setShowCamera(false);
  }
   
  // functionality to move the component 


  return (
    
    <div className='w-[100vw] h-[100vh]'>
        <div id='comp2'ref={comp2Ref} className='md:w-[800px] mx-1 pb-[0.5rem]   w-12/12 top-0 md:top-[5%] md:mx-auto left-0 right-0    absolute cursor-pointer h-[99%] md:h-[36rem] bg-[#2e2e2ecc] flex justify-center items-center'>
           <div className=' h-[99%] md:h-[36rem] pb-[2rem]'>
                <div className='w-full flex  pt-[1rem] px-[1.5rem]'>
                    <div className='flex  w-[45%] '>
                       <div className='flex gap-1 ' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <button onClick={closeHandler}  className='mb-3 rounded-full flex items-center justify-center border-black sm:w-3 w-[1.2rem] h-[1.2rem] sm:h-3 bg-[#FF0000] '> <RxCross2 className={ `w-3 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`} /> </button>
                            <button className='mb-3 rounded-full border-black sm:w-3 w-[1.2rem] h-[1.2rem] sm:h-3 bg-[#FFEA00] flex justify-center items-center '> <RiSubtractLine className={`w-3 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}/></button>
                            <button  className='mb-3 rounded-full border-black sm:w-3 w-[1.2rem] h-[1.2rem] sm:h-3 bg-[#7CFC00] flex justify-center items-center'> <MdCloseFullscreen  className={`w-3 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}/> </button>

                       </div>

                    </div>
                    
                    <div  className='text-white text-xl sm:text-[1rem] leading-3 font-[200]'>Camera</div>

                </div>
                 <div className='p-3 rounded-md w-full '>
                   {capturedImage ? (
                        <>
                          <img src={capturedImage} alt="Captured" />
                          <button onClick={handleRetake}>Retake</button>
                        </>
                     ) : (
                        <>
                          <video ref={videoRef} autoPlay></video>
                          <canvas  ref={canvasRef} style={{ display: 'none' }}></canvas>
                          <div onClick={handleCapture} className='w-[41px] md:w-[30px] hover:scale-110 mx-auto rounded-full border-black mt-4 h-[41px] md:h-[30px] bg-white'></div>
                        </>
                     )}
                 </div>
           </div>

         </div>

         <Moveable
            target={comp2Ref}
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

export default Comp2