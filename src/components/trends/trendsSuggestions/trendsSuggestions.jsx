import data from '../../../data.jsx'
import TrendsFollow from './trendsFollow.jsx'
import ButtonSeeMoreTrending from '../ButtonSeeMoreTrending.jsx'


export default function TrendSuggestions (){
  return(
  <>
    <div className='trendingListMessage'>
      {data.map(trendingFollow => (
        <TrendsFollow key={trendingFollow.id} trendingFollow={trendingFollow}/>
        
      ))}
      <ButtonSeeMoreTrending content='Show more' />
    </div>
  </>
  )
}
