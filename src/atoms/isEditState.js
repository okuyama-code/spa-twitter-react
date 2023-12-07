import { atom } from 'recoil'

export const isEditState = atom({
  key: 'isEditState', //一意のキー
  default: false // 初期値
})

// 参考URL
// https://qiita.com/itachi/items/69784d66dbe624ebaceb
