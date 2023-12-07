import Avatar from '../../avatar.jsx'

export default function TrendsFollow ({trendSuggestions}) {
  return (
    <div className="">
      <div className="tweet-avatar" > 
        <Avatar source={trendSuggestions.avatar} />
      </div>
    </div>
    )
}