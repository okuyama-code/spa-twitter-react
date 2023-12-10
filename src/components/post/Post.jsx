import React from 'react'
import "./Post.scss";
import { Users } from "../../dummyData";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";



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
        </div>
      </div>
      <div className="postCenter">
          <p className="postText">{post.desc}</p>
          <img src={post.photo} alt="" className='postImg'/>
      </div>
      <div className="postIcons">
        <div className="PostIcon">
          <FaRegComment className='postIconIcon' />
          <span className="IconCount">{post.comment}</span>
        </div>
        <div className="PostIcon">
          <AiOutlineRetweet className='postIconIcon' />
          <span className="IconCount">{post.comment}</span>
        </div>
        <div className="PostIcon">
            <CiHeart className='postIconIcon' />
            <span className='IconCount'>{post.like}</span>
        </div>
        <div className="PostIcon">
          <CiBookmark className='postIconIcon' />
          <span className="IconCount">{post.comment}</span>
        </div>
      </div>
    </div>
  )
}

export default Post
