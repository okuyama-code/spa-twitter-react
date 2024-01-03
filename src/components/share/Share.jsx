import React, { useState } from 'react'
import "./Share.scss";
import { CiImageOn } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createPost, imageAttach } from '../../lib/api/post';
import { currentUserState } from '../../atoms/currentUserState';
import { useRecoilValue } from 'recoil';
import useCurrentUser from '../../hooks/useCurrentUser';

const Share = () => {
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState({data: "", name: ""})
  const currentUser = useRecoilValue(currentUserState);
  const navigate = useNavigate();

  useCurrentUser();

  const PostSubmit = async (e) => {
    e.preventDefault();
    try {
      const paramsPost = {
        "post_content": postContent
      }
      console.log(postContent);
       // ここでpost.idが生まれる。それをイメージの添付処理に使う。
       const res = await createPost(paramsPost);
      // もし画像のstateのdataが空文字じゃないならawait attachImageでエンドポイントを叩く。
      if (image.data !== "") {
        const paramsImage = {
          "image": image,
          // ここで直前にpostの中にparams[:id]を込めることができる。POSTのときのparamsはURL上(これはGETのみ)ではなくformのinputタグから送られた奴になる。
          "id": res.data.post.id
        }
        await imageAttach(paramsImage)
      }
      setPostContent("");
      toast.success("投稿しました");
      navigate("/")
    } catch(e) {
      console.log(e);
      toast.error("投稿に失敗しました。")
    }
  }

  const handleImageSelect = (e) => {
    const reader = new FileReader();
    const files = e.target.files;
    // console.log(reader);
    // console.log(files);
    // console.log(files[0]);
    // console.log(files[0].name);
    if (files) {
      reader.onload = () => {
        setImage({
          data: reader.result,
          name: files[0] ? files[0].name : "unknownfile",
        });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  return (
    <div className='share'>
      <div className="shareWrapper">
        <div className="shareTop">
          <Link to={{ pathname: `/users/${currentUser.id}` }}>
            <img src={currentUser.icon_url} alt="" className='shareProfileImg'/>
          </Link>
          <input
            type="text"
            name="tweet_content"
            className='shareInput'
            placeholder='今何してるの？'
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            />
        </div>

        {image.data !== "" ?  <img className='previewImg' src={image.data} alt="" /> : ""}

        <hr className='shareHr'/>
        <div className="shareButtons">
          <div className="shareOption">
          <label htmlFor="image" ><CiImageOn size={30} className='shareIcon' /></label>
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*,.png,.jpg,.jpeg,.gif" className='hidden'
              onChange={handleImageSelect}
              />
          </div>
          <button
            className="shareButton"
            onClick={PostSubmit}
          >投稿</button>
        </div>
      </div>
    </div>
  )
}

export default Share
