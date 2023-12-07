import tweetImage from './images/tweetImage.png'
import vector from "./components/icons/Vector.png";
import imageLogo from "./images/imageLogo.png"
import tweetProfilePhoto from './images/tweet-profile-photo.png'
import twitterImage from './components/icons/twitterImage.png'
import imageCertification from './components/icons/Group.svg'


const data = [
  {
    id: 1,
    avatar: tweetProfilePhoto,
    Image: null,
    title: "CNN",
    titleDescription: '@CNN . 7m',
    imgverified: imageCertification,
    content: 'President Joe Biden touted a new agreement reached whith the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
    details: {
      actionCountRetweets: "144",
      actionCountComments: "57",
      actionCountLikes: "184",
      actionCountShares: '11K',

    },

  },

  {
    id: 2,
    avatar: imageLogo,
    Image: tweetImage,
    title: "The New York Times",
    titleDescription: '@nytimes . 2h',
    imgverified: imageCertification,
    content: 'Gardening boomed during the pandemic. Six Black writers share how has helped re-establish, and reimage, a connection to cultivation and the land.',
    details: {
      actionCountRetweets: "48",
      actionCountComments: "19",
      actionCountLikes: "482",
      actionCountShares: '45K',

    },


  },

  {
    id: 3,
    avatar: twitterImage,
    Image: null,
    title: "Twitter",
    titleDescription: '@Twitter . Oct 29',
    imgverified: imageCertification,
    content: 'BIG NEWS lol jk still Twetter.',
    details: {
      actionCountRetweets: "785.4K",
      actionCountComments: "118.7K",
      actionCountLikes: "3.3M",
      actionCountShares:'33K',

    },


  },

  {
    id: 4,
    avatar: twitterImage,
    Image: null,
    title: "Twitter",
    titleDescription: '@Twitter . Oct 4',
    imgverified: imageCertification,
    content: 'hello litteraly everyone',
    details: {
      actionCountRetweets: "85.4K",
      actionCountComments: "8K",
      actionCountLikes: "3.3M",
      actionCountShares: '66K',

    },


  },

  {
    id: 5,
    avatar: twitterImage,
    Image: vector,
    title: "Twitter",
    titleDescription: '@Twitter . Oct 4',
    imgverified: imageCertification,
    content: 'hello litteraly everyone',
    details: {
      actionCountRetweets: "785.4K",
      actionCountComments: "118.7K",
      actionCountLikes: "3.3M",
      actionCountShares: "88K",

    },

  },


  // ... Autres tweets
];

export default data