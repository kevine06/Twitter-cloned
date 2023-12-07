


const IconAction = ({ icon, details }) => {

  return (
    <>

      <img
        src={icon} alt="Icon" />
        <p className='tweet-actions'>{details}</p>
    </>


  );
};

export default IconAction;