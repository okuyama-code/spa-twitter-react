import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='NotfoundWrapper'>
      <h1>404<br /> NOT FOUND</h1>
      <h2>
        アクセスしようとしたページは見つかりませんでした。
      </h2>
      <h2 className='my-2 font-semibold'>＊原因として考えられること</h2>

      <div className='NotfoundList'>
        <h3>・ 新規登録もしくはログインしないと見ることができないページである</h3>
        <h3>・ ご覧になりたいページが削除されたかもしれません</h3>
        <h3>・ 入力したURLが間違っている可能性があります。</h3>
      </div>

      <div className='notFoundPageBtn'>
        <Link to="/home">
          <p>Topに戻る</p>
        </Link>
      </div>

      <div>
      <p className='notFoundPageP'>アプリを実際に利用したい際には新規登録 or ログインが必要です。</p>

      <div className='notFoundPageBtn'>
        <Link to="/">
          <p>ログインページへ</p>
        </Link>
      </div>

      </div>
    </div>
  )
}

export default Page404
