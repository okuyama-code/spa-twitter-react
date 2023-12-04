import React from 'react'
import "./Post.scss";
import { Users } from "../../dummyData";


// { post } は親であるtimeLineからpropsとして受け取っている。ちゃんと受け取れているのかconsole.logで確認できる。
const Post = ({ post }) => {
    // Usersは配列なので一つ一つfilterで取り出す必要がある。
    // const user = Users.filter((user) => user.id === 1 );
    // console.log(user[0].username);
  return (
    <div className='post'>
      <div className="postWrapper">
          <div className="postTop">
              <div className="postTopLeft">
                  <img src={Users.filter((user) => user.id === post.userId)[0].profilePicture} alt="" className='postProfileImg' />
                  <span className='postName text-xl font-bold'>
                    {Users.filter((user) => user.id === post.userId)[0].name}
                  </span>
                  <span className="postUsername">
                      @{Users.filter((user) => user.id === post.userId)[0].username}
                  </span>
                  <span className="postDate">{post.date}</span>
              </div>
              <div className="postTopRight">
              </div>
          </div>
      </div>
      <div className="postCenter">
          <p className="postText">{post.desc}</p>
          <img src={post.photo} alt="" className='postImg'/>
      </div>
      <div className="postBottom">
          <div className="postBottomLeft">
              <img src="./assets/heart.png" alt="" className='likeIcon'  />
              <span className='postLikeCounter'>{post.like}人がいいねを押しました</span>
          </div>
          <div className="postBottomRight">
              <span className="postCommentText">{post.comment}:コメント</span>
          </div>
      </div>
    </div>
  )
}

export default Post
