
import Header from "../components/header/header";
import Input from "../components/tweet-editor/tweet-editor";
import Tweets from "../components/tweets";
import SideBars from "../components/sideBar/SideBar";
import TrendingList from '../components/trends/Trending.jsx'


function Home() {
    return (
  <>
        <div className='sidebars'>
             <SideBars />
         </div>
        <div className="timeline">
               <Header />
               <Input />
               <Tweets />
        </div>
        <div>
             <TrendingList />
        </div>
      </>
       
       
    );
}

export default Home;