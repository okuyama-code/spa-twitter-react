import React, { useEffect, useState } from 'react'
import { IoIosLogIn } from "react-icons/io"
import { Link, useNavigate } from 'react-router-dom'
import { getUser, signIn } from '../lib/api/auth';
import Cookies from 'js-cookie';
import { isLoginState } from '../atoms/isLoginState';
import { useSetRecoilState } from 'recoil';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const setIsLogin = useSetRecoilState(isLoginState);




  useEffect(() => {

    if (Cookies.get("_access_token")) {
      navigate("/home");
    }


  }, [navigate]);

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn({ email, password });
      Cookies.set("_access_token", res.headers["access-token"]);
      Cookies.set("_client", res.headers["client"]);
      Cookies.set("_uid", res.headers["uid"]);
      setIsLogin(Cookies.get("_access_token"))
      navigate('/home');
      toast.success("ログインに成功しました");
    } catch (e) {
      console.log(e);
      console.log(e.response.data.errors[0]);
      setErrorMessage(e.response.data.errors[0]);
      toast.error("ログイン情報が間違っています");
    }
  };

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
                  type="text"
                  placeholder='you@gmail.com'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className='mb-5'>
                <input
                  type="password"
                  placeholder='パスワード'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className='mb-2 text-red-400'>
                {errorMessage}
              </div>
              <button
                className='mb-3 text-xl w-4/12 bg-blue-500 text-white rounded hover:opacity-75 p-2 flex items-center justify-center mx-auto'
                onClick={login}
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
