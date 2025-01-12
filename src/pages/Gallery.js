import React, {useContext, useState} from 'react';
// import link 
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// cursor context
import { CursorContext } from '../context/CursorContext';
// import css 
import '../index.css';
// import icons
import { ImCross } from "react-icons/im";
// import images
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';



const Gallery = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)

  // get images from database
  let data =[
    {
      id: 1,
      imgSrc: Image1,
    },
    {
      id: 2,
      imgSrc: Image2,
    },
    {
      id: 3,
      imgSrc: Image3,
    },
    {
      id: 4,
      imgSrc: Image4,
    }
  ]

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  // get image function 
  const getImg = (imgSrc) =>{
    setTempImgSrc(imgSrc);
    setModel(true);
  }

  return( 
  <motion.section 
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1} 
    className='section overflow-auto'
  >
    <div className='mx-auto h-full relative m-0'>
      <div className='flex flex-col h-full items-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
        {/* text */}
        <motion.div 
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          initial={{ opacity: 0, y: '-80%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-80%' }}
          transition={transition1} 
          className='flex flex-col items-center w-full'
        >
          <h1 className='h1'>Image Gallery</h1>
          <p className='mb-12 text-center w-2/3' style={{width: "60%;"}}>
            Amet aute in occaecat sit culpa laboris est fugiat dolor anim ipsum. 
            Non <b>consequat, proident</b> enim excepteur ad duis 
            consectetur consectetur commodo ea non. 
          </p>
        </motion.div>
        {/* pop-up image */}
        <div className={model? "model open" : "model"}>
             <img src={tempimgSrc} />
             <ImCross onClick={() => setModel(false)} />
          </div>
          {/* image grid*/}
          <div className='gallery w-full'>
            {data.map((item, index)=>{
              return(
                <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                  <img src={item.imgSrc} style={{width: '100%'}} />
                </div>
              )
            })}
          </div>
      </div>
    </div>
  </motion.section>
  );
};
  
  export default Gallery;
  