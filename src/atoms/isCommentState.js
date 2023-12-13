import { atom } from 'recoil'

export const isCommentState = atom({
  key: 'isCommentState', //一意のキー
  default: false // 初期値
})
