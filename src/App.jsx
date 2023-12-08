import Home from "./pages/home.jsx";
import ProfilUser from "./pages/profil.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import('./style/reset.css')
import('./style/App.css')
import('./style/profil.css')


export default function App() {
  return (
    <BrowserRouter >
     <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profilUser" element={<ProfilUser />} />
        </Routes>
    </Layout>
    </BrowserRouter>
   
  )
}
