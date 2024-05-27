import React, { useRef, useState } from 'react';
import Moveable from 'react-moveable';
import { RxCross2 } from "react-icons/rx";
import { RiSubtractLine } from "react-icons/ri";
import { MdCloseFullscreen } from "react-icons/md";

//youtube component2

const Comp4 = ({ setShowYoutube }) => {
  const comp3Ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  function closeHandler() {
    setShowYoutube(false);
  }

  return (
    <div className='w-[100vw] h-[100vh]'>
      <div
        id='comp3'
        ref={comp3Ref}
        className='md:w-[800px] mx-1 pb-[0.5rem] w-12/12 top-0 md:top-[5%] md:mx-auto left-0 right-0 absolute cursor-pointer h-[99%] md:h-[36rem] bg-[#2e2e2ecc] flex justify-center items-center'
      >
        <div className='w-full h-full px-[0.5rem]'>
          <div className='w-full flex pt-[1rem] px-[1.5rem]'>
            <div className='flex w-[45%]'>
              <div
                className='flex gap-1'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={closeHandler} onTouchStart={closeHandler}
                  className='mb-3 rounded-full flex items-center justify-center border-black sm:w-3 w-[1.2rem] h-[1.2rem] sm:h-3 bg-[#FF0000]'
                >
                  <RxCross2
                    className={`w-3 h-3 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                  />
                </button>
                <button className='mb-3 rounded-full border-black sm:w-3 w-[1.2rem] h-[1.2rem] sm:h-3 bg-[#FFEA00] flex justify-center items-center'>
                  <RiSubtractLine
                    className={`w-3 h-3 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                  />
                </button>
                <button className='mb-3 rounded-full border-black sm:w-3 w-[1.2rem] h-[1.2rem] sm:h-3 bg-[#7CFC00] flex justify-center items-center'>
                  <MdCloseFullscreen
                    className={`w-3 h-3 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                  />
                </button>
              </div>
            </div>
            <div className='text-white text-xl sm:text-[1rem] leading-3 font-[200]'>YouTube</div>
          </div>

          <iframe width="100%" height="89%" src="https://www.youtube.com/embed/U2SVCCENLjE?si=XCIYFA_gRV-6qhAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
      </div>

      <Moveable
        target={comp3Ref}
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
  );
};

export default Comp4;