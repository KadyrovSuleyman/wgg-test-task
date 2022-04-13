/* eslint-disable no-param-reassign */
import { Ref } from 'vue';
import { FriendT } from './types';
import vk from './vk';

const getFriendList = (list: Ref<FriendT[]>) => vk.login(() => {
  vk.getFriendList()
    .then((apiList) => apiList.map((friend) => ({
      id: friend.id,
      name: `${friend.first_name} ${friend.last_name}`,
      photo_50: friend.photo_50,
      list: 'all',
    } as FriendT)))
    .then((computedList) => { list.value = computedList; });
});

export default getFriendList;
