import InputTrends from './inputTrends'
import TreandHeader from './trendHeader'
import TrendSuggestions from './trendsSuggestions/trendsSuggestions.jsx'


export default function TrendingList (){
    return(
      <div>
        <InputTrends />
        <TreandHeader />
        <TrendSuggestions />
      </div>
    )
}