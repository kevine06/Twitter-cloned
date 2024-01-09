
function IconAction ({ icon, count}) {


  return (
    <div className="tweet-action">
      <img  src={icon}  alt="Icon" /> 
      <p>{count}</p>     
    </div>
  );
};
export default IconAction;