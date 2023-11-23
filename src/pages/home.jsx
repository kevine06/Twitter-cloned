import React from 'react';
import Header from "../components/header/header";
import Input from "../components/tweet-editor/tweet-editor";
import Tweets from "../components/tweets/tweets";


function Home() {
    return (
        <main className="timeline">
           <Header />
           <Input />
          <Tweets />
        </main>

    );
}

export default Home;