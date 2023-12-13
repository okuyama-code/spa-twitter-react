import { atom } from 'recoil'

export const isEditState = atom({
  key: 'isEditState', //一意のキー
  default: false // 初期値
})


