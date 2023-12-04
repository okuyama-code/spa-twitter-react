import React from 'react'
import "./Post.scss";


const Post = () => {
  return (
    <div className='post'>
      <div className="postWrapper">
          <div className="postTop">
              <div className="postTopLeft">
                  <img src="/assets/person/icon.png" alt="" className='postProfileImg' />
                  <span className="postUsername">
                      @okuyama
                  </span>
                  <span className="postDate">5分前</span>
              </div>
              <div className="postTopRight">
              </div>
          </div>
      </div>
      <div className="postCenter">
          <p className="postText">あああ</p>
          <img src="/assets/post/minyon3.jpeg" alt="" className='postImg'/>
      </div>
      <div className="postBottom">
          <div className="postBottomLeft">
              <img src="./assets/heart.png" alt="" className='likeIcon'  />
              <span className='postLikeCounter'>1人がいいねを押しました</span>
          </div>
          <div className="postBottomRight">
              <span className="postCommentText">4:コメント</span>
          </div>
      </div>
    </div>
  )
}

export default Post
