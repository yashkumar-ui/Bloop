import React , {useRef,useEffect, useState} from 'react'
import './Comp5.css';
import Moveable from 'react-moveable';
import { RxCross2 } from "react-icons/rx";
import { RiSubtractLine } from "react-icons/ri";
import { MdCloseFullscreen } from "react-icons/md";
import bgGradient from '../assets/gradient-bg.jpg';

// Tic tac Toe component

const NewGameButton = ({ onClick, active }) => {
  return (
      <button className={`btn md:bottom-8 ${active ? 'active' : ''}`} onClick={onClick}>
          New Game
      </button>
  );
};

const Box = ({ value, onClick, className }) => {
  return (
      <div className={className} onClick={onClick}>
          {value}
      </div>
  );
};





const Comp5 = ({ setShowTicTac }) => {

  const comp5Ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const myStyle = {
    backgroundImage: `url(${bgGradient})`,
    height:"100%",
    width:"100%",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overFlow:"hidden"
  }

  function closeHandler(){
      setShowTicTac(false);
  }

  ////game logic 

  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameGrid, setGameGrid] = useState(Array(9).fill(''));
  const [gameInfo, setGameInfo] = useState(`Current Player - ${currentPlayer}`);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);


  const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];

  useEffect(() => {
    if (!gameOver) {
        setGameInfo(`Current Player - ${currentPlayer}`);
    }
   }, [currentPlayer, gameOver]);

  const initGame = () => {
    setCurrentPlayer('X');
    setGameGrid(Array(9).fill(''));
    setGameInfo(`Current Player - X`);
    setGameOver(false);
    setGameStarted(false);
  };

  const checkGameOver = (newGameGrid) => {
    let winner = '';
    winningPositions.forEach(position => {
        const [a, b, c] = position;
        if (newGameGrid[a] && newGameGrid[a] === newGameGrid[b] && newGameGrid[a] === newGameGrid[c]) {
            winner = newGameGrid[a];
        }
    });

    if (winner) {
        setGameInfo(`Winner Player - ${winner}`);
        setGameOver(true);
        return;
    }

    if (newGameGrid.every(box => box !== '')) {
        setGameInfo('Game Tied !');
        setGameOver(true);
        return true;
    }

    return false;
  };


  const handleBoxClick = index => {
    if (gameGrid[index] === '' && !gameOver) {
        setGameStarted(true);
        const newGameGrid = [...gameGrid];
        newGameGrid[index] = currentPlayer;
        setGameGrid(newGameGrid);
        if (!checkGameOver(newGameGrid)) {
          setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
         }
        // checkGameOver(newGameGrid);
    }
  };


  return (
    <div className='w-[100vw] h-[100vh]'>
          <div id='comp3' ref={comp5Ref} className='md:w-[800px] mx-1    w-12/12 top-0 md:top-[5%] md:mx-auto left-0 right-0    absolute cursor-pointer h-[99%] md:h-[36rem] bg-[#2e2e2ecc] flex justify-center items-center'>
        
             <div className='w-full h-full  px-[0.5rem]' style={myStyle} >
                   <div className='w-full flex pt-[1rem] px-[1.5rem]'>
                       <div className='flex w-[37%] sm:w-[43%]   md:w-[44.4%] '>
                            <div className='flex gap-1' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                 <button onClick={closeHandler}  className='mb-3 rounded-full flex items-center justify-center border-black sm:w-3 w-[1.2rem] h-[1.2rem] sm:h-3 bg-[#FF0000] '> <RxCross2 className={ `w-3 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`} /> </button>
                                 <button className='mb-3 rounded-full border-black sm:w-3 w-[1.2rem] h-[1.2rem] sm:h-3 bg-[#FFEA00] flex justify-center items-center '> <RiSubtractLine className={`w-3 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}/></button>
                                 <button  className='mb-3 rounded-full border-black sm:w-3 w-[1.2rem] h-[1.2rem] sm:h-3 bg-[#7CFC00] flex justify-center items-center'> <MdCloseFullscreen  className={`w-3 transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}/> </button>

                            </div>

                       </div>
                    
                       <div  className='text-white text-xl sm:text-[1rem] leading-3 font-[200]'>Tic Tac Toe</div>

                   </div>

                  {/* logic game */}

                  <div className='w-[100%] h-[85%] pb-1 grid'>
                      
                       <p className='text-center px-[3rem] py-[0.5rem] mb-auto font-[300]  mt-3 mx-auto game-info'>{gameInfo}</p>
                     
                    
                       <div className='max-w-[20rem] tic-tac grid w-[90%] mx-auto  mt-4 mb-2'>
                           {/* <div className='box box1'>X</div>
                           <div className='box box2'>0</div>
                           <div className='box box3'>X</div>
                           <div className='box box4'>X</div>
                           <div className='box box5'>X</div>
                           <div className='box box6' >X</div>
                           <div className='box box7'>X</div>
                           <div className='box box8' >0</div>
                           <div className='box box9'>0</div> */}
                            {gameGrid.map((value, index) => (
                                <Box
                                   key={index}
                                   value={value}
                                   onClick={() => handleBoxClick(index)}
                                   className={`box box${index + 1} ${winningPositions.some(position => position.includes(index) && gameGrid[position[0]] === gameGrid[position[1]] && gameGrid[position[1]] === gameGrid[position[2]] && gameGrid[position[0]] !== '' && gameGrid[position[1]] !== '' && gameGrid[position[2]] !== '') ? 'win' : ''}`}
                                 />
                             ))}
                       </div>

                       <NewGameButton onClick={initGame} active={gameOver || gameStarted}/>

                  </div>

               
             </div>
          </div>

           <Moveable
            target={comp5Ref}
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

export default Comp5