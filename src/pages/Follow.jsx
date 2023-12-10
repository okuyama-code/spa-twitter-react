import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import FollowHeader from '../components/follow/FollowHeader';
import Followings from '../components/follow/Followings';
import Followers from '../components/follow/Followers';


const Follow = () => {
  return (
    <div>
      <FollowHeader />
      <div className='profile_tabs'>
        <Tabs>
          <TabList className="tablist">
            <Tab><h2>フォロー中</h2></Tab>
            <Tab><h2>フォロワー</h2></Tab>
          </TabList>
          <TabPanel className="tabPanel">
            <Followings />
          </TabPanel>
          <TabPanel>
            <Followers />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Follow
