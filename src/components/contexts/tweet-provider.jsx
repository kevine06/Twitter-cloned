import  { useState } from "react";
import data from "../../data.jsx"
import TweetContext from "./tweet-contexts";


const TweetProvider = ({ children }) => {
    const [tweetData, setTweetData] = useState(data);

    const  upDataTweetData = (newData) => {
        setTweetData(newData);
    };

    return (
        <TweetContext.Provider value={{ dataTweet: tweetData, upDataTweetData}}>
            { children}
        </TweetContext.Provider>

    )
}

export default TweetProvider;