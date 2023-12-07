import { Link } from 'react-router-dom'


export default function ButtonSeeMoreTrending ({content}) {
    return(
        <>
            <Link to='/'>{content}</Link>
        </>
    )
}