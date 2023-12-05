import React from 'react';
import Header from "../components/header/header";
import Input from "../components/tweet-editor/tweet-editor";
import Tweets from "../components/tweets/tweets";
import SideBars from "../components/sideBar/SideBar";


function Home() {
    return (
        <div className='sidebars'>
          <div className='sidebar'>
            <SideBars />
          </div>
          <div className="timeline">
             <Header />
             <Input />
            <Tweets />
          </div>
          <div>
          </div>
        </div>
    );
}

export default Home;