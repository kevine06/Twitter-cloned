import Home from "./pages/home.jsx";
import ProfilUser from "./pages/profil.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import('./style/reset.css')
import('./style/App.css')
import('./style/profil.css')
import('./style/index.css')
import Post from "./components/Post.jsx"
import Replies from "./components/Replies.jsx"
import Highlights from "./components/Highlights.jsx"
import Media from "./components/Media.jsx"
import Likes from "./components/Likes.jsx"
import TweetProvider from "./components/contexts/tweet-provider";

export default function App() {
  return (
    <BrowserRouter >
    <TweetProvider>
      <Layout> 
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profilUser" element={<ProfilUser />} >
                <Route index element={<Post />} />
                <Route path="replies" element={<Replies/>} /> 
                <Route path="highlights" element={<Highlights />} />
                <Route path="media" element={<Media />} />
                <Route path="likes" element={<Likes />} />
            </Route>
          </Routes>
        </Layout>
      </TweetProvider>
    </BrowserRouter>
   
  )
}
