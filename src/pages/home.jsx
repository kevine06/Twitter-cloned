
import { useContext } from "react";
import Header from "../components/header/header";
import Input from "../components/tweet-editor/tweet-editor";
import Tweets from "../components/tweets";
import TweetContext from "../components/contexts/tweet-contexts";

function Home() {
  const { dataTweet } = useContext(TweetContext)
    return (
      <>
          <Header />
          <Input />
          <Tweets />
      </>
       
       
    );
}
export default Home;