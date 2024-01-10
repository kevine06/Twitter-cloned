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
        </div> 
             
    </>

  );
}
export default TwitterProfile;


