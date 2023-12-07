import Avatar from '../../avatar.jsx'
import Button from '../../tweet-editor/tweetButton.jsx'

export default function TrendsFollow ({trendingFollow}) {
  return (
    <div className="FollowTrending">
      <div className="trendingFollow" > 
        <Avatar source={trendingFollow.avatar} />
      </div>
      <div className='trendingFollow-title'>
          <div className='tweet-title'>
            <div className='trendings'>
              <div className='tweet-title'>
              <h6>{trendingFollow.title}</h6>
              <span><img src={trendingFollow.imgverified} /></span>
              </div>   
              <p>{trendingFollow.titleDescription}</p>    
            </div> 
            <Button tweet='follow'/>
          </div>
      </div>
      </div>
    )
}