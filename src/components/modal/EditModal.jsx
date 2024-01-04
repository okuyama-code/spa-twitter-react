import React, { useState } from 'react'
import "./Modal.scss";
import { IoMdClose } from "react-icons/io";
import { useSetRecoilState } from 'recoil';
import { isEditState } from '../../atoms/isEditState';
import { objectToFormData } from '../../utils/formDataHelper';
import { updateUser } from '../../lib/api/user';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';



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

    const formData = objectToFormData({ user: sanitizedData })

    try {
      await updateUser(id, formData)
      modalClose();
      toast.success("ユーザー情報を編集しました")
      navigate("/home");
      // navigate(`/users/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  if(!user) return <div className='loading'><CircularProgress color="inherit" /></div>

  return (
    <>
      <div className='edit_modal'>
        <div className='flex m-1'>
          <button onClick={modalClose}>
            <IoMdClose className='close_icon' />
          </button>
          <h2 className='edit_h2'>Edit Profile</h2>
        </div>

        <div className='edit_profile_img'>
          <img src={user.header_url} alt="" className='header_img' />
          <img src={user.icon_url} alt="" className='icon_img' />
        </div>

        <form
          className='edit_form'
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdateSubmit(formData);
          }}
        >
          <button type='submit'     className='modalSaveButton'>更新する</button>
          <input
            type="text"
            placeholder='お名前'
            value={formData.name}
            onChange={(e) => {
              setFormData({
                ...formData, name: e.target.value
              })
            }}
          />
          <textarea
            cols="70" rows="4"
            placeholder='自己紹介文'
            value={formData.self_introduction}
            onChange={(e) => {
              // console.log(e.target.value)
              setFormData({
                ...formData, self_introduction: e.target.value
              })
            }}
          />
          <input
            type="text"
            placeholder='住んでいる場所'
            value={formData.location}
            onChange={(e) => {
              // console.log(e.target.value)
              setFormData({
                ...formData, location: e.target.value
              })
            }}
          />
          <input
            type="text"
            placeholder='ウェブサイトURL'
            value={formData.website}
            onChange={(e) => {
              // console.log(e.target.value)
              setFormData({
                ...formData, website: e.target.value
              })
            }}
          />
          <input
            type="text"
            placeholder='1990-05-09 (生年月日)'
            value={formData.date_of_birth}
            onChange={(e) => {
              // console.log(e.target.value)
              setFormData({
                ...formData, date_of_birth: e.target.value
              })
            }}
          />
          <div>
            <label htmlFor="icon" className=' block mb-2'>アイコン画像</label>
            <input
              type="file"
              name="icon"
              id="avatar"
              accept="image/*,.png,.jpg,.jpeg,.gif"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setFormData({
                  ...formData,
                  icon: e.target.files[0],
                })
              }}
              />
          </div>
          <div>
            <label htmlFor="header" className=' block mb-2'>ヘッダー画像</label>
            <input
              type="file" name="header" id="header" accept="image/*,.png,.jpg,.jpeg,.gif" className='input_last'
              onChange={(e) => {
                console.log(e.target.files[0]);
                setFormData({
                  ...formData,
                  header: e.target.files[0],
                })
              }}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default EditModal
