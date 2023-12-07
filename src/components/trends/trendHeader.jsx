import ButtonSeeMoreTrending from './ButtonSeeMoreTrending.jsx'

function IconTrendSetting () {
  return(
    <img src='src/components/icons/setting-icon.svg' alt="iconSetting" />
  )
}
function HeaderTrend () {
  return(
    <div className="tweet-actions">
      <h1 className="trendingTitle">Trends for you</h1>
      <IconTrendSetting />
    </div>
  )
}

function Trends ({p, h2, span, icon}) {
  return(
    <div className="trendingNotifications"> 
      <div className="trendings">
          <p>{p}</p>
          <h2>{h2}</h2>
          <span>{span}</span>
      </div>
      <img src={icon} alt='icon'/>
    </div>
  )
}

export default function TreandHeader() {
  return (
    <div className="trendingListMessage">
       <HeaderTrend />
       <Trends p='Trending in turkey' h2='#SQUID' span='2,066 Tweets' icon='src/components/icons/continued.svg'/>
       <Trends p='Trending in turkey' h2='#SQUID' span='2,066 Tweets' icon='src/components/icons/continued.svg'/>
       <Trends p='Trending in turkey' h2='#SQUID' span='2,066 Tweets' icon='src/components/icons/continued.svg'/>
       <Trends p='Trending in turkey' h2='#SQUID' span='2,066 Tweets' icon='src/components/icons/continued.svg'/>
      <ButtonSeeMoreTrending content='Show more'/>
    </div>
  );
}