import React from 'react'
import './Follow.scss'


const Followers = () => {
  return (
    <>
      <div className='flex justify-between mb-5'>
        <div className='flex'>
          <img src="assets/person/icon.png" alt="" className='follow_img' />
          <div>
            <h2>鈴木Follower</h2>
            <p>@suzuki01</p>
            <p>aaaaaaaaaaaaaa<br />
              aaaaaaaaaaaaaa<br />
              aaaaaaaaaaaaaa
            </p>
          </div>
        </div>

        <button className='followingButton'>following</button>
      </div>
      <div className='flex justify-between mb-5'>
        <div className='flex'>
          <img src="assets/person/icon.png" alt="" className='follow_img' />
          <div>
            <h2>鈴木</h2>
            <p>@suzuki01</p>
            <p>aaaaaaaaaaaaaa<br />
              aaaaaaaaaaaaaa<br />
              aaaaaaaaaaaaaa
            </p>
          </div>
        </div>

        <button className='followingButton'>following</button>
      </div>
      <div className='flex justify-between mb-5'>
        <div className='flex'>
          <img src="assets/person/icon.png" alt="" className='follow_img' />
          <div>
            <h2>鈴木</h2>
            <p>@suzuki01</p>
            <p>aaaaaaaaaaaaaa<br />
              aaaaaaaaaaaaaa<br />
              aaaaaaaaaaaaaa
            </p>
          </div>
        </div>

        <button className='followingButton'>following</button>
      </div>
      <div className='flex justify-between mb-5'>
        <div className='flex'>
          <img src="assets/person/icon.png" alt="" className='follow_img' />
          <div>
            <h2>鈴木</h2>
            <p>@suzuki01</p>
            <p>aaaaaaaaaaaaaa<br />
              aaaaaaaaaaaaaa<br />
              aaaaaaaaaaaaaa
            </p>
          </div>
        </div>

        <button className='followingButton'>following</button>
      </div>

    </>
  )
}

export default Followers
