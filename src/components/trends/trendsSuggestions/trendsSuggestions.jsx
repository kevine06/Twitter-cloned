import { useContext } from 'react'
import TrendsFollow from './trendsFollow.jsx'
import ButtonSeeMoreTrending from '../ButtonSeeMoreTrending.jsx'
import TweetContext from '../../contexts/tweet-contexts.js'


export default function TrendSuggestions (){
  const { dataTweet } = useContext(TweetContext)
  return(
  <>
    <div className='trendingListMessage'>
      {dataTweet.map(trendingFollow => (
        <TrendsFollow key={trendingFollow.id} trendingFollow={trendingFollow}/>
        
      ))}
      <ButtonSeeMoreTrending content='Show more' />
    </div>
  </>
  )
}
