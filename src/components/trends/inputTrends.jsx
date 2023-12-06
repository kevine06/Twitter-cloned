function TrendsIcon (){
  return(
    <img src='src/components/icons/Trens-icon-search.png' alt='nbb' />  )
}

export default function InputTrends () {
  return (
    <div className="trends-input">
      <TrendsIcon />
      <input className="trends-editor-input" type='search' placeholder="Search Twitter"></input>
    </div>
  )
}  