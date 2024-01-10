import { Link } from 'react-router-dom';
import LuffyGear5 from '../images/roronoa.jpg'

function TwitterProfile() {
  return (
    <>
        <div className="profile" >
            <img src={LuffyGear5} alt="Profile Picture" className="profile-pic" /> 
        </div>
        <div className='avatarProfil'>
            <h1>Kevine Motoba</h1>
            <h2>@kemo</h2>
            <p>Web Developer. Lover of all things tech. Coffee addict.</p>
            <button className="edit-profile-button">Editer le profil</button>
          <div className='flex justify-between mt-10 '>
              <Link to="post" className='border-b-2 '>Post</Link>
              <Link to="replies">Replies</Link>
              <Link to="highlights">Highlights</Link>
              <Link to="media">Media</Link>
              <Link to="likes">Likes</Link>             
          </div>
        </div>      
    </>

  );
}
export default TwitterProfile;


