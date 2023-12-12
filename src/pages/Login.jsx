import React, { useState } from 'react'
import { IoIosLogIn } from "react-icons/io"
import { Link, useNavigate } from 'react-router-dom'
import { signIn } from '../lib/api/auth';
import Cookies from 'js-cookie';
// https://qiita.com/Ryo9597/items/83473a0d64eb92edb467　html

// https://zenn.dev/prune/books/32a2fd62831c7f/viewer/5e7791 実装
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await signIn({ email, password });
      Cookies.set("_access_token", res.headers["access-token"]);
      Cookies.set("_client", res.headers["client"]);
      Cookies.set("_uid", res.headers["uid"]);
      navigate('/home');
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
          <Link to="/home" className='signup_link'>
            <p className='mb-2'>ホーム画面に戻る</p>
          </Link>

            <h2 class="text-4xl font-bold">ログイン</h2>
            <form className='mt-12'>
              <div className='mb-3'>
                <input
                  type="email"
                  placeholder='you@gmail.com'
                  name='email'
                  className='text-xl w-7/12 p-3 border rounded'
                />
              </div>
              <div className='mb-5'>
                <input
                  type="password"
                  placeholder='パスワード'
                  name='password'
                  className='text-xl w-7/12 p-3 border rounded'
                />
              </div>
              <button
                type='submit'
                className='mb-3 text-xl w-4/12 bg-blue-500 text-white rounded hover:opacity-75 p-2 flex items-center justify-center mx-auto'
              >
                ログイン<IoIosLogIn size={30} className='ml-2' />
              </button>
            </form>
            <Link to="/signup">
              <p className='signup_link'>
                新規登録画面へ
              </p>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
