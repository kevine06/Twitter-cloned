
function addTweet(tweetData, tweet) {
    const lastTweet = tweetData.length - 1
    let key = tweetData[lastTweet].id + 1
    let newTweet =  {
        id: key,
        avatar: null,
        Image: null,
        title: "CNN",
        titleDescription: '@CNN . 7m',
        certification: imageCertification,
        content: 'tweet',
        likes: "0",
        comments: "0",
        upload :"0",
        Shares:'0',
    
      }
}