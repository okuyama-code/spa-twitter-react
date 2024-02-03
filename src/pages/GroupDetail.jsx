import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { createMessage, fetchGroup, fetchMessages } from '../lib/api/others';
import useUserList from '../hooks/useUserList';
import useCurrentUser from '../hooks/useCurrentUser';
import { toast } from 'react-toastify';


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
        // console.log(res.data)

        const res2 = await fetchMessages(id)
        setMessages(res2.data.messages)
        console.log(res2.data.messages)

      } catch (e) {
        console.log(e)
      }
    }
    loadFetchGroup();
  }, [id])

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const MessageSubmit = async (id) => {
    try {
      const paramsMessage = {
        "body": message
      }
      await createMessage(id, paramsMessage);
      setMessage("");
      toast.success("メッセージを送信しました");
      navigate("/groups")
    } catch (e) {
      console.log(e);
      toast.error(" メッセージの送信に失敗しました。")

    }
  }

  return (
    <div className='followPage'>
      <Sidebar />
      {another_entry && (
        <div className='followContainer'>
          {/* ============= DMの文章部分 ==================  */}
          <div class="message-box-header">
          <Link to={{ pathname: "/groups" }}><p className='following_header'><FaArrowLeft /></p></Link>
            <h3>{users.filter((user) => user.id === another_entry.user_id)[0]?.name}</h3>
          </div>
          {/* メッセージ投稿フォーム */}
          <div>
            <form className='messageForm'>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  MessageSubmit(id);
                }}
              >送信</button>
            </form>
          </div>

          {/* メッセージ本文 */}
          {messages.map((message) => (
            <div>
              <div>
                {/* if文で投稿が自分なら */}
                {currentUser.id == message.user_id && (
                  <div class="message-box-body-info">
                    <div class="blank-div"></div>
                      <p>{message.body}</p>
                  </div>
                )}

                {/* else文 投稿が自分以外なら */}
                {another_entry.user_id == message.user_id && (
                  <div class="message-box-body-info">
                  <p>{message.body}</p>
                    <div class="blank-div"></div>
                </div>
                )
                }

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  )
}

export default GroupDetail
