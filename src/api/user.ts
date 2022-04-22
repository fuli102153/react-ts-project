import { httpGet } from '@/utils/request';

interface IUserInfoRseponse {
  uid: string,
	userName: string,
}

/** 请求用户信息 */
export const getUserInfo = (uid: string) => httpGet<IUserInfoRseponse>(`user_info/?uid=${uid}`);