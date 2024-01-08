import React from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";


const GroupDetail = () => {
  return (
    <div className='followPage'>
      <Sidebar />
      <div className='followContainer'>
        {/* ============= DMの文章部分 ==================  */}
        <div class="message-box-header">
        <Link to={{ pathname: "/groups" }}><p className='following_header'><FaArrowLeft /></p></Link>
          <h3>山田 花子</h3>

        </div>

        {/* メッセージ本文 */}
        <div class="message-box-body">
          {/* if文で投稿が自分なら */}
          <div class="message-box-body-info">
            <div class="blank-div"></div>
            <p>(自分)<br />お疲れ様です！今度イルミネーション行きませんか？？？</p>
          </div>
          {/* else文 投稿が自分以外なら */}
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
    </div>
  )
}

export default GroupDetail
