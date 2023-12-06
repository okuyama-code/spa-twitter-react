import React from 'react'
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from 'react-router-dom';


const Signup = () => {
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
                登録する<SiGnuprivacyguard size={30} className='ml-2' />
              </button>
            </form>
            <Link to="/login">
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
