import Home from "./pages/home.jsx";
import ProfilUser from "./pages/profil.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes , Route } from "react-router-dom";

import('./style/reset.css')
import('./style/App.css')
import('./style/profil.css')
import { DataProvider } from "./context/UserContext.jsx";


export default function App() {
  return (
    <BrowserRouter >
      
      <Layout> 
      <DataProvider> 
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profilUser" element={<ProfilUser />} />
          </Routes>
          </DataProvider>
        </Layout>
      
    </BrowserRouter>
   
  )
}
