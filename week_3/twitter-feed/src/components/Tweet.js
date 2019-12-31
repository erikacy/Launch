import React from 'react'

const Tweet = (props) => {
  let userMedia;
  let displayUrl;
  let userText = "";
  let retweetTrueColor;
  let likedTrueColor;

  if (props.twitterObject.entities.media !== undefined) {
    props.twitterObject.entities.media.forEach(mediaObject => {
      displayUrl = mediaObject.display_url
      userMedia =
      <img src={mediaObject.media_url} width="100%" className="userImg"/>;
    })
  }
  if (props.twitterObject.text.includes(displayUrl)) {
    userText = props.twitterObject.text.replace(displayUrl, '')
  } else {
    userText = props.twitterObject.text
  }

  if (props.twitterObject.retweeted === true) {
    retweetTrueColor =
      <span className="retweeted">
        <i className="fas fa-retweet retweeted"></i>
          {props.twitterObject.retweet_count}
      </span>
  } else {
    retweetTrueColor =
      <span>
        <i className="fas fa-retweet"></i>
          {props.twitterObject.retweet_count}
      </span>
  }

  if (props.twitterObject.liked === true) {
    likedTrueColor =
      <span className="liked">
        <i className="fas fa-heart liked"></i>
          {props.twitterObject.favorite_count}
      </span>
  } else {
    likedTrueColor =
      <span>
        <i className="fas fa-heart"></i>
          {props.twitterObject.favorite_count}
      </span>
  }

  return(
    <div>
    <div className="individualTweet">
        <div className="media-object">
            <div className="media-object-section">
                <div className="thumbnail">
                    <img src={props.userInfo.profile_image_url} />
                </div>
            </div>
            <div className="media-object-section main-section">
                <span className="userName">{props.userInfo.name} </span>
                <span className="screenName">{props.userInfo.screen_name} • {props.postDate}</span>
                <p>
                    {userText} {userMedia}
                </p>
                <i className="fas fa-reply" onClick={props.tweetOnClick}></i>

                <span className="iconNum" onClick={props.tweetOnClick}>
                    {retweetTrueColor}
                </span>
                <span className="iconNum" onClick={props.tweetOnClick}>
                    {likedTrueColor}
                </span>
                <i className="fas fa-ellipsis-h" onClick={props.tweetOnClick}></i>
            </div>
        </div>

    </div>
    </div>
  )
}


export default Tweet;
