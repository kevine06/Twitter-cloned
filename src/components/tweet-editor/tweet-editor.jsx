import React from 'react';
import image from "../../images/profilePhoto.png";
import Button from './tweetButton';


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
      <input className="tweet-editor-input" type="search" placeholder="what's happining"/> 
    </div>
  )
}



function Icons({icon}){
  return <div>
          <img src={icon} alt=""/>
        </div>
}

function TweetEditorButtons(){
  return(
    <div className="tweet-editor-buttons">
      <div className="tweet-editor-actions">
        <Icons icon="src/components/icons/galerie.png"/>
        <Icons icon="src/components/icons/GIF.png"/>
        <Icons icon="src/components/icons/statistique.png"/>
        <Icons icon="src/components/icons/sourire.png"/>
        <Icons icon="src/components/icons/calendrier.png"/>
        </div>
      <Button tweet='tweet'/>
    </div>
  )
}

function TweetEditorForm(){
  return(
    <div className="tweet-editor-form">
       <TweetEditorInput />
      <TweetEditorButtons />
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