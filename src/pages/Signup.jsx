import React, { useState } from 'react'
import { SiGnuprivacyguard } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../lib/api/auth';
import Cookies from 'js-cookie';


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    try {
      const res = await signUp({ email, password });
      Cookies.set("_access_token", res.headers["access-token"]);
      Cookies.set("_client", res.headers["client"]);
      Cookies.set("_uid", res.headers["uid"]);
      // TODO ここがうまくいかない
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='flex flex-col h-screen login_bg'>
      <div className='flex-auto'>
        <div className='flex justify-center mt-20'>
          <div className='w-9/12 border border-gray-200 rounded-xl login_bg_opacity'>
          <div class="my-16 text-center">
            <Link to="/" className='signup_link'>
              <p className='mb-2'>ホーム画面に戻る</p>
            </Link>

            <h2 class="text-4xl font-bold">新規登録</h2>
            <form className='mt-12'>
              <div className='mb-3'>
                <input
                  type="email"
                  placeholder='you@gmail.com'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-5'>
                <input
                  type="password"
                  placeholder='パスワード'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className='mb-3 text-xl w-4/12 bg-blue-500 text-white rounded hover:opacity-75 p-2 flex items-center justify-center mx-auto'
                onClick={register}
              >
                登録する<SiGnuprivacyguard size={30} className='ml-2' />
              </button>
            </form>
            <Link to="/">
              <p className='signup_link'>
                ログイン画面へ
              </p>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
