import { Link } from "react-router-dom";
function Avatar({avatar, title, titleDescription}) {

    return (
        <div className="avatar"> 
             <Link to={`/profilUser?title=${title}&avatar=${avatar}&titleDescription=${titleDescription}`}> <img src={avatar} alt="avatar"  /> </Link>
        </div>
    )
}

export default Avatar;