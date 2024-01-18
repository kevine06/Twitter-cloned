export default function Button({tweet, handleClick}){
    return (
      <div >
        <button onClick={handleClick} className="button">{tweet}</button>
      </div>
    );
  }