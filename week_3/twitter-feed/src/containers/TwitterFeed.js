import React from 'react';
import Tweet from '../components/Tweet'

const TwitterFeed = (props) => {
  const tweeter = props.data.map((twitterObject) => {

    let onClickTrigger = (event) => {
      if (event.target.className == 'fas fa-reply') {
        event.target.className = "fas fa-reply clicked";
        alert("Replied");
      } else if (event.target.className == 'fas fa-retweet') {
        event.target.className = "fas fa-retweet clicked";
        alert("Retweeted");
      } else if (event.target.className == 'fas fa-heart') {
        event.target.className = "fas fa-heart clicked";
        alert("Favorited");
      }
      else if (event.target.className == 'fas fa-ellipsis-h') {
        alert("More");
      }
      else if (twitterObject.liked === true) {
        "yes"
      }
    };
    // debugger
    const date = new Date(parseInt(twitterObject.timestamp_ms))
    const postDate = date.toLocaleString('default', { month: 'short', day:'numeric' });

    return(
      <Tweet
      key={twitterObject.id_str}
      userInfo={twitterObject.user}
      tweetOnClick={onClickTrigger}
      twitterObject={twitterObject}
      postsFavorited={twitterObject.liked}
      postsRetweet={twitterObject.retweeted}
      postDate={postDate}
      />
    )
  })
  return(
    <div>
    {tweeter}
    </div>
  )
};

export default TwitterFeed;
