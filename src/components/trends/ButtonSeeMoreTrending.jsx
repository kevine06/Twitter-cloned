import { Link } from 'react-router-dom'


export default function ButtonSeeMoreTrending ({content}) {
    return(
        <div className='side-bar-menu'>
            <Link className='ButtonSeeMoreTrending' to='/'>{content}</Link>
        </div>
    )
}