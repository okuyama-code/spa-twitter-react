import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link, useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { fetchGroup } from '../lib/api/others';
import useUserList from '../hooks/useUserList';
import useCurrentUser from '../hooks/useCurrentUser';


const GroupDetail = () => {

  const { id } = useParams();
  const [another_entry, setAnother_entry] = useState(null)
  const [messages, setMessages] = useState([]);

  const { currentUser } = useCurrentUser();

  const { users } = useUserList();

  useEffect(() => {
    const loadFetchGroup = async () => {
      try {
        const res = await fetchGroup(id)
        setAnother_entry(res.data.another_entry)
        setMessages(res.data.messages)
        console.log(res.data)
      } catch (e) {
        console.log(e)
      }
    }
    loadFetchGroup();
  }, [id])

  return (
    <div className='followPage'>
      <Sidebar />
      {another_entry && (
        <div className='followContainer'>
          {/* ============= DMの文章部分 ==================  */}
          <div class="message-box-header">
          <Link to={{ pathname: "/groups" }}><p className='following_header'><FaArrowLeft /></p></Link>
            <h3>{users.filter((user) => user.id === another_entry.user_id)[0].name}</h3>
          </div>
          {/* メッセージ投稿フォーム */}
          <div>
            <form className='messageForm'>
              <input
                type="text"
              />
              <button>送信</button>
            </form>
          </div>

          {/* メッセージ本文 */}
          {another_entry.user_id == messages.user_id && (<div>相手の投稿</div>)
          }
          <div class="message-box-body">
            {/* if文で投稿が自分なら */}
            <div class="message-box-body-info">
              <div class="blank-div"></div>
              <p>(自分)<br />お疲れ様です！今度イルミネーション行きませんか？？？</p>
            </div>
            {/* else文 投稿が自分以外なら */}
            {another_entry.user_id == messages.user_id && (<div>相手の投稿</div>)
          }
            <div class="message-box-body-info-other">
              <p>(相手)<br />結構です！普通ご飯から誘うと思うんだけど。</p>
              <div class="blank-div"></div>
            </div>
            {/* end  */}
            {/* if文で投稿が自分なら  */}
            <div class="message-box-body-info">
              <div class="blank-div"></div>
              <p>(自分)<br />じゃあご飯行きましょうよ！！</p>
            </div>
            {/* else文 投稿が自分以外なら */}
            <div class="message-box-body-info-other">
              <p>(相手)<br />考えておきます！(お前みたいなチャラい奴と行くわけないだろ。早くどっかいけ！)</p>
              <div class="blank-div"></div>
            </div>
            {/* end */}
            {/* if文で投稿が自分なら  */}
            <div class="message-box-body-info">
              <div class="blank-div"></div>
              <p>(自分)<br />来月とか空いてる日ありますか？</p>
            </div>
            {/* else文 投稿が自分以外なら */}
            <div class="message-box-body-info-other">
              <p>(相手)<br />既読</p>
              <div class="blank-div"></div>
            </div>
            {/* end */}
          </div>
        </div>
      )}
    </div>
  )
}

export default GroupDetail
