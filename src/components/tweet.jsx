
import Avatar from  "./avatar";
import IconAction from "./iconAction";
import groups from "./icons/Groups.png";
import Vector from "./icons/Vector.png";
import IconLikeButton from "./iconLikebutton";
import IconVectorButton from "./iconVectorButton";

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

                            <span> <img src={tweet.certification} alt="" /> </span>
                            <p  className='tweet-title-details'>{tweet.titleDescription}</p>
                        </div>

                        <p className='tweet-text'> {tweet.content} </p>
                        <div className='tweet-image'> <img src={tweet.Image} alt="" /></div>                   
                    </div>
                    <div className='tweet-actions'> 
                          <IconVectorButton count={tweet.upload} /> 
                          <IconAction 
                                    icon={groups} 
                                    count={tweet.Shares} /> 
                            <IconLikeButton count={tweet.likes}/>
                          <IconAction 
                                    icon={Vector} 
                                    count={tweet.likes} />
                    </div>
                </div>
            </div>
        </>

    );

}



export default Tweet;
