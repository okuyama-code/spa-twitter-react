import React, { useState } from 'react'
import "./Modal.scss";
import { IoMdClose } from "react-icons/io";
import { useSetRecoilState } from 'recoil';
import { isEditState } from '../../atoms/isEditState';
import { objectToFormData } from '../../utils/formDataHelper';
import { updatePost } from '../../lib/api/user';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';



const EditModal = ( { user, id } ) => {
  const setIsEdit = useSetRecoilState(isEditState);
  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    user || {
      name: "", date_of_birth: "", self_introduction: "", location: "",
      website: "", icon: "", header: "",
    }
  );
  // console.log(id)

  const modalClose = () => {
    setIsEdit(false);
  }

  const handleUpdateSubmit = async (rawData) => {
    // "sanitizedData" は「無害化されたデータ」や「安全なデータ」
    const sanitizedData = {
      name: rawData.name,
      date_of_birth: rawData.date_of_birth,
      self_introduction: rawData.self_introduction,
      location: rawData.location,
      website: rawData.website,
      icon: rawData.icon, header: rawData.header
    }

    const formData = objectToFormData({ post: sanitizedData })

    try {
      const response = await updatePost(id, formData)
      navigate(`/users/${response.id}`)
    } catch (e) {
      console.log(e);
    }
  }

  if(!user) return <div className='loading'><CircularProgress color="inherit" /></div>

  return (
    <>
      <div className='edit_modal'>
        <div className='flex justify-between mt-1'>
          <div className='flex'>
            <button onClick={modalClose}>
              <IoMdClose className='close_icon' />
            </button>
            <h2 className='edit_h2'>Edit Profile</h2>
          </div>

          <input type="submit" value="保存する"  className='editButton'></input>
          {/* <button  className='editButton'>保存する</button> */}
        </div>

        <div className='edit_profile_img'>
          <img src={user.header_url} alt="" className='header_img' />
          <img src={user.icon_url} alt="" className='icon_img' />
        </div>

        <form className='edit_form'>
          <input type="text" placeholder='お名前' />
          <textarea name="" id="" cols="70" rows="4" placeholder='自己紹介文'></textarea>
          <input type="text" placeholder='住んでいる場所' />
          <input type="text" placeholder='ウェブサイトURL'  />
          <input type="text" placeholder='1998/01/21 (生年月日)'  />
          <div>
            <label htmlFor="icon" className=' block mb-2'>アイコン画像</label>
            <input type="file" name="icon" id="avatar" accept="image/*,.png,.jpg,.jpeg,.gif" />
          </div>
          <div>
            <label htmlFor="header" className=' block mb-2'>ヘッダー画像</label>
            <input type="file" name="header" id="header" accept="image/*,.png,.jpg,.jpeg,.gif" className='input_last'/>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditModal
