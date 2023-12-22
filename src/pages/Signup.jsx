import React, { useEffect, useState } from 'react'
import { SiGnuprivacyguard } from "react-icons/si";
import { Link, useNavigate } from 'react-router-dom';
import { getUser, signUp } from '../lib/api/auth';
import Cookies from 'js-cookie';
import { useSetRecoilState } from 'recoil';
import { isLoginState } from '../atoms/isLoginState';
import { toast } from 'react-toastify';


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const setIsLogin = useSetRecoilState(isLoginState);


  useEffect(() => {
    const f = async () => {
      try {
        const res = await getUser();
        console.log(res);
        if (res.data.isLogin) {
          navigate("/home");
        }
      } catch (e) {
        console.log(e);
      }
    };
    f();
  }, [navigate]);

  const register = async (e) => {
    try {
      e.preventDefault();
      const res = await signUp({ email, password, name, username  });
      Cookies.set("_access_token", res.headers["access-token"]);
      Cookies.set("_client", res.headers["client"]);
      Cookies.set("_uid", res.headers["uid"]);
      setIsLogin(Cookies.get("_access_token"));
      toast.success("新規登録に成功しました");
      navigate('/home');
    } catch (e) {
      console.log(e);
      console.log(e.response.data.errors.fullMessages);
      setErrorMessage("入力情報に誤りがあります。再度ご確認の上、入力をお願いいします。");
      toast.error("入力情報が間違っています");

    }
  }

  return (
    <div className='flex flex-col h-screen login_bg'>
      <div className='flex-auto'>
        <div className='flex justify-center mt-20'>
          <div className='w-9/12 border border-gray-200 rounded-xl login_bg_opacity'>
          <div class="my-16 text-center">
            <Link to="/" className='signup_link'>
              <p className='mb-2'>ホーム画面へ</p>
            </Link>

            <h2 class="text-4xl font-bold">新規登録</h2>
            <form className='mt-12'>
              <div className='mb-3'>
                <input
                  type="text"
                  placeholder='okuyama (名前)'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <input
                  type="text"
                  placeholder='okuyama01 (ユーザーネーム)'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <input
                  type="email"
                  placeholder='you@gmail.com (メールアドレス)'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-5'>
                <input
                  type="password"
                  placeholder='パスワード (6文字以上)'
                  className='text-xl w-7/12 p-3 border rounded'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='mb-2 text-red-400'>
                {errorMessage}
              </div>
              <button
                className='mb-3 text-xl w-4/12 bg-blue-500 text-white rounded hover:opacity-75 p-2 flex items-center justify-center mx-auto'
                onClick={register}
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
