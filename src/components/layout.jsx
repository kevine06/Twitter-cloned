import React from 'react';
import SideBars from "../components/sideBar/SideBar";
import TrendingList from '../components/trends/Trending.jsx'


function Layout({children}) {
    return (
        <>
          <div className='sidebars'>
             <SideBars />
         </div>
        <div className="timeline">
               {children}
        </div>
        <div>
             <TrendingList />
        </div>
        </>
    );
}

export default Layout;