
import Tweet  from "./tweet"
import data from "../data.jsx";


function Tweets() {

  return (

    <>
      <div>
        {data.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>

    </>
  );
}


export default Tweets;
