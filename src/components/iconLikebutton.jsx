import likes from './icons/likes.svg'
import like from './icons/like.svg'
import { useState } from 'react';

function IconLikeButton ({ count }) {
    const [icon, setIcon] = useState(false)
    const [compter, setCompter] = useState(count)

    function handleClick () {
      if (!icon) {
        setCompter(compter - 1);
        
      } else {
        setCompter(compter + 1);
        
      }
      return setIcon(!icon)
  
    }

  return (
    <div  className='tweet-action' onClick={() => handleClick()}>
      <img  src={icon ? likes : like}  alt="Icon" /> 
      <p className='tweet-actions'>{compter}</p>      
    </div>
  );
};
export default IconLikeButton;