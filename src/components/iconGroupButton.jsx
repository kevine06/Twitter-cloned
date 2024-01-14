import { useState } from "react"
 
function IconGroupButton ({ count }) {
   const [icon, setIcon] = useState(false)

   function handleClick () {
     return setIcon(!icon)
 
   }
   return (
       <div className="tweet-action-vector">
           <div className={`tweet-vector ${icon ? 'iconGreen ': " "}`} onClick={handleClick}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                   <path d="M12.0459 0.242002L7.89795 0.232002H7.89595C3.52195 0.232002 0.0959473 3.659 0.0959473 8.034C0.0959473 12.132 3.28195 15.24 7.56095 15.404V19.232C7.56095 19.34 7.60495 19.518 7.68095 19.635C7.82295 19.86 8.06495 19.982 8.31295 19.982C8.45095 19.982 8.58995 19.944 8.71495 19.864C8.97895 19.696 15.1879 15.724 16.8029 14.358C18.7049 12.748 19.8429 10.388 19.8459 8.046V8.029C19.8399 3.662 16.4159 0.242002 12.0459 0.241002V0.242002ZM15.8329 13.214C14.6989 14.174 10.9709 16.619 9.06095 17.857V14.67C9.06095 14.256 8.72595 13.92 8.31095 13.92H7.91495C4.25495 13.92 1.59695 11.444 1.59695 8.034C1.59695 4.5 4.36495 1.732 7.89695 1.732L12.0439 1.742H12.0459C15.5779 1.742 18.3459 4.508 18.3479 8.038C18.3449 9.948 17.4059 11.882 15.8339 13.214H15.8329Z" fill="#D9D9D9"/>
               </svg>
           </div>
           <p> {count} </p>
       </div>
   )
}

export default IconGroupButton