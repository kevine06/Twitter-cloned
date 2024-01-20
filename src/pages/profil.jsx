import React from 'react';
import { Link} from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useContext } from "react";
import TweetContext from "../components/contexts/tweet-contexts.js";
import Avatar from '../components/avatar.jsx';
import IconGroupButton from '../components/iconGroupButton.jsx';
import IconLikeButton from '../components/iconLikebutton.jsx';
import IconVectorButton from '../components/iconVectorButton.jsx';
import InconSharesButton from '../components/InconSharesButton.jsx';


function TwitterProfile() {
  const [searchParams] = useSearchParams();
  const tweet = Object.fromEntries([...searchParams]);
  const { dataTweet } = useContext(TweetContext);

  return (
    <>
      <div className="profile">
        <img src={tweet.avatar} alt="Profile Picture" className="profile-pic" />
      </div>
      <div className='avatarProfil'>
        <h1>{tweet.title}</h1>
        <p>{tweet.titleDescription}</p>
        <button className="edit-profile-button">Editer le profil</button>
        <div className='flex justify-between mt-10'>
          <Link to="/profilUser/" className='border-b-2 '>Post</Link>
          <Link to="/profilUser/replies">Replies</Link>
          <Link to="/profilUser/highlights">Highlights</Link>
          <Link to="/profilUser/media">Media</Link>
          <Link to="/profilUser/likes">Likes</Link>

        </div>
        
      </div>
      {dataTweet.map(tweet => (
            <div className="tweet">
                <div className='tweet-avatar'>
                 <Avatar {...tweet} /> 
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
                        <IconVectorButton count={tweet.comments} /> 
                        <InconSharesButton count={tweet.Shares} />
                        <IconLikeButton count={tweet.likes}/>
                        <IconGroupButton count={tweet.upload} />
                    </div>
                </div>
            </div>
      ))} 
    </>
  );
}
export default TwitterProfile;



