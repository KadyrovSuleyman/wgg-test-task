import { ApiFriendI, ApiFriendListT } from './types';

declare global {
  interface Window { VK: any; }
}
window.VK = window.VK || {};

const vk = () => {
  let VK: any;
  let userId: number;

  const script = document.createElement('script');
  script.src = 'https://vk.com/js/api/openapi.js?169';
  document.head.append(script);

  script.onload = () => {
    VK = window.VK;
    VK.init({
      apiId: 8136088,
    });
  };

  return {
    login: (callback: CallableFunction) => new Promise((resolve) => {
      VK.Auth.login((data: any) => {
        userId = data.session.user.id;
        callback();
        resolve(userId);
      });
    }),

    getFriendList: () => new Promise((resolve: (item: ApiFriendI[]) => void) => {
      VK.Api.call('friends.get', {
        user_id: userId, v: '5.134', fields: 'photo_50, education', order: 'random',
      }, (r: ApiFriendListT) => {
        console.log(r);
        resolve(r.response.items);
      });
    }),
  };
};

export default vk();
