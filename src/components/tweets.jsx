
import Tweet  from "./tweet"
// import data from "../data.jsx";
import TweetContext from "./contexts/tweet-contexts";
import { useContext } from "react";


function Tweets() {
  const { dataTweet } = useContext(TweetContext)
  return (

    <>
      <div>
        {dataTweet.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </>
  );
}


export default Tweets;
