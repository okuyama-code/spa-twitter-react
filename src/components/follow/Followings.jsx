import React from 'react'
import './Follow.scss'
import { Button } from '@mui/material'

const Followings = () => {
  return (
    <>
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
        <button className='UnfollowingButton'>フォロー解除</button>
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

export default Followings
