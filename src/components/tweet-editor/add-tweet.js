import imageCertification from '../../components/icons/certifation.png'

function addTweet(tweet) {
  let key =  Math.random()*10000; // Génère une clé aléatoire
  let newTweets =  {
      id: key,
      avatar: null,
      Image: null,
      title: "CNN",
      titleDescription: '@CNN . 7m',
      certification: imageCertification,
      content: tweet,
      likes: "0",
      comments: "0",
      upload :"0",
      Shares:'0',
  };
  return newTweets; // Retourne le nouvel objet tweet
}

export default addTweet;