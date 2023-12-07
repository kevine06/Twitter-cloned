import data from '../../../data.jsx'
import TrendsFollow from './trendsFollow.jsx'


export default function TrendSuggestions (){
  return(
  <>
    <div className='trendingListMessage'>
      {data.map(trendingFollow => (
        <TrendsFollow key={trendingFollow.id} trendingFollow={trendingFollow}/>
      ))}
    </div>
  </>
  )
}
