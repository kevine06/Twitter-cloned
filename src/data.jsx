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
    likes: "785",
    comments: "11",
    upload :"34",
    Shares:'33',

  },

  {
    id: 2,
    avatar: imageLogo,
    Image: tweetImage,
    title: "The New York Times",
    titleDescription: '@nytimes . 2h',
    imgverified: imageCertification,
    content: 'Gardening boomed during the pandemic. Six Black writers share how has helped re-establish, and reimage, a connection to cultivation and the land.',
    likes: "50",
    comments: "51",
    upload :"34",
    Shares:'33'
  },

  {
    id: 3,
    avatar: twitterImage,
    Image: null,
    title: "Twitter",
    titleDescription: '@Twitter . Oct 29',
    imgverified: imageCertification,
    content: 'BIG NEWS lol jk still Twetter.',
    likes: "75",
    comments: "18",
    upload :"64",
    Shares:'73',
  },

  {
    id: 4,
    avatar: twitterImage,
    Image: null,
    title: "Twitter",
    titleDescription: '@Twitter . Oct 4',
    imgverified: imageCertification,
    content: 'hello litteraly everyone',
    likes: "78",
    comments: "41",
    upload :"14",
    Shares:'93',


  },

  {
    id: 5,
    avatar: twitterImage,
    Image: vector,
    title: "Twitter",
    titleDescription: '@Twitter . Oct 4',
    imgverified: imageCertification,
    content: 'hello litteraly everyone',
    likes: "85",
    comments: "11",
    upload :"34",
    Shares:'33',

  },


  // ... Autres tweets
];

export default data