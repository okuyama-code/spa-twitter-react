import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Follow from '../components/follow/Follow';
import Follower from '../components/follow/Follower';


const Followings = () => {
  return (
    <div>
      <div className='flex following_header'>
        <Link to={{ pathname: "/profile" }}><span className='following_header'><FaArrowLeft /></span></Link>
        <div>
          <h2>okuyama | HC</h2>
          <p>@output0121</p>
        </div>
      </div>

      <div className='profile_tabs'>
        <Tabs>
          <TabList className="tablist">
            <Tab><h2>フォロー中</h2></Tab>
            <Tab><h2>フォロワー</h2></Tab>
          </TabList>

          <TabPanel className="tabPanel">
            <Follow />
          </TabPanel>
          <TabPanel>
            <Follower />
          </TabPanel>

        </Tabs>
      </div>
    </div>
  )
}

export default Followings
