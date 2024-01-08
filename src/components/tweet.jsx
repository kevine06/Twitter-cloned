
import Avatar from  "./avatar";
import IconAction from "./iconAction";
import groups from "./icons/Groups.png";
import Share  from "./icons/Share.png";
import Vector from "./icons/Vector.png";
import likes from "./icons/likes.svg";
import like from "./icons/like.svg";
import { useState } from "react";

function Tweet({ tweet }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const star = isFavorite ? like : likes
    const [addLike , RemoveLike ]=  useState(tweet.comments)
    
    function handleClick() {
        if(star == like){  
            RemoveLike(addLike - 1)
            setIsFavorite(!isFavorite)
         
        } else{
            RemoveLike(addLike + 1)
           setIsFavorite(!isFavorite)
        }  
        return 
    }
  
    return (

        <>
            <div className="tweet">
                <div className='tweet-avatar'>
                  <Avatar source={tweet.avatar} />

                </div> 
                <div className='tweet-content'>

                    <div className='tweet-body'>
                        <div className='tweet-title'>
                            <p className='tweet-title-author'> {tweet.title} </p>

                            <span> <img src={tweet.imgverified} alt="" /> </span>
                            <p  className='tweet-title-details'>{tweet.titleDescription}</p>
                        </div>

                        <p className='tweet-text'> {tweet.content} </p>
                        <div className='tweet-image'> <img src={tweet.Image} alt="" /></div>                   
                    </div>


                    <div className='tweet-actions'>
                            <span  onClick={() =>  setIsFavorite(!isFavorite)} onClick={() => handleClick()}
                                className='tweet-action'>  
                                <IconAction  
                                    icon={star}
                                    details={addLike}
                                /> 

                            </span> 

                            <span className='tweet-action'>  
                                <IconAction 
                                    icon={Share}  
                                    details={tweet.upload} 
                                /> 
                            </span>

                            <span className='tweet-action'>  
                                <IconAction 
                                    icon={groups} 
                                    details={tweet.Shares}
                                /> 
                            </span>

                            <span className='tweet-action'>  
                                <IconAction 
                                    icon={Vector} 
                                    details={tweet.likes} 
                                /> 
                            </span>
                    </div>
                </div>
            </div>
        </>

    );

}



export default Tweet;
