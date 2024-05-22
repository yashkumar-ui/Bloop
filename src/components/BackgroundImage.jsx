import React from 'react'
import image from '../assets/macos.jpg'

const BackgroundImage = ({selectedImage}) => {
    
    var abc = `url(${image})`;
    if(selectedImage){
         abc = `url(${selectedImage})`;
    }else{
          abc = `url(${image})`
    }

    const myStyle = {
        backgroundImage: abc,
        height:"100%",
        width:"100%",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        overFlow:"hidden"
      }

  return (
    <div style={myStyle}></div>
  )
}

export default BackgroundImage;