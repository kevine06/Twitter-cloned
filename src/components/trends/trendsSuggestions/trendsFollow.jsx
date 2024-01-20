import Avatar from '../../avatar.jsx'
import Button from '../../tweet-editor/tweetButton.jsx'

export default function TrendsFollow ({ trendingFollow }) {
  return (
    <div className="FollowTrending">
      <div className="trendingFollow" > 
        <Avatar {...trendingFollow} />
      </div>
      <div className='trendingFollow-title'>
          <div className='tweet-title'>
            <div className='trendings'>
              <div className='trendingFollow-title'>
              <h6>{trendingFollow.title}</h6>
              <img src={trendingFollow.certification} />
              </div>   
              <p>{trendingFollow.titleDescription}</p>    
            </div> 
            
          </div>
          
      </div>
      <Button tweet='follow'/>
      </div>
    )
}