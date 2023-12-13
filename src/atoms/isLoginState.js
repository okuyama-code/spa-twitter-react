import { atom } from 'recoil'

export const isLoginState = atom({
  key: 'isLoginState', //一意のキー
  default: false // 初期値
})
