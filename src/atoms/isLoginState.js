import Cookies from 'js-cookie'
import { atom } from 'recoil'

export const isLoginState = atom({
  key: 'isLoginState',
  default: Cookies.get("_access_token")
})
