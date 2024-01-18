export default function Button({tweet, setPost}){
    return (
      <div onClick={setPost}>
        <button className="button">{tweet}</button>
      </div>
    );
  }