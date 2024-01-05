
import Avatar from  "./avatar";
import IconAction from "./iconAction";
import groups from "./icons/Groups.png";
import Share  from "./icons/Share.png";
import Vector from "./icons/Vector.png";
import like from "./icons/React.png";

function Tweet({ tweet }) {
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
                            <span className='tweet-action'>  
                                <IconAction 
                                    icon={like} 
                                    details={tweet.details.actionCountComments}
                                /> 

                            </span> 

                            <span className='tweet-action'>  
                                <IconAction 
                                    icon={Share}  
                                    details={tweet.details.actionCountRetweets} 
                                /> 
                            </span>

                            <span className='tweet-action'>  
                                <IconAction 
                                    icon={groups} 
                                    details={tweet.details.actionCountLikes}
                                /> 
                            </span>

                            <span className='tweet-action'>  
                                <IconAction 
                                    icon={Vector} 
                                    details={tweet.details.actionCountShares} 
                                /> 
                            </span>
                    </div>
                </div>
            </div>
        </>

    );

}



export default Tweet;
