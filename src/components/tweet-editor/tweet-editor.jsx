import React, { createContext, useState } from 'react';
import image from "../../images/profilePhoto.png";
import Button from './tweetButton';
import TweetContext from '../contexts/tweet-contexts';
import {  useContext } from 'react';


const create = createContext()


function Avatar(){
  return ( 
     <div className="avatar"> 
       <img  src={image} alt="profil-logo" />
     </div>
    )
}

function TweetEditorInput (){
  return(
    <div>
      <input className="tweet-editor-input" 
      type="search" 
      placeholder="what's happining"/> 

    </div>
  )
}



function Icons({icon}){
  return <div>
          <img src={icon} alt=""/>
        </div>
}

function TweetEditorButtons({handleClick}){
  return(
    <div className="tweet-editor-buttons">
      <div className="tweet-editor-actions">
        <Icons icon="src/components/icons/galerie.png"/>
        <Icons icon="src/components/icons/GIF.png"/>
        <Icons icon="src/components/icons/statistique.png"/>
        <Icons icon="src/components/icons/sourire.png"/>
        <Icons icon="src/components/icons/calendrier.png"/>
        </div>
    <Button tweet='tweet'handleClick={handleClick}/>
    </div>
  )
}

function TweetEditorForm(){
  const { data, upDataTweetData} = useContext(TweetContext)
  const [ tweet, setTweet] = useState("")

  const handleClick = (e) => {
    e.preventDefault()
    if(tweet.trim() !== "") {
      let tweetAdded = addTweet(data, tweet)
      upDataTweetData([tweetAdded, ...data])

    }
    setTweet('')
  }

  const handleMessageChange = (e) => {
    setTweet(e.target.value)
  }
  return(
    <div className="tweet-editor-form">
       <TweetEditorInput getTweetText={handleMessageChange} tweet={tweet}/>
      <TweetEditorButtons handleClick={handleClick}/>
    </div>
  )
}

export default function TweetEditor (){
  return (
        <div className="tweet-editor">
          <Avatar />
          <TweetEditorForm />
        </div>
  );
 }