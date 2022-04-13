/* eslint-disable no-param-reassign */
import { Ref } from 'vue';
import { FriendT } from './types';
import vk from './vk';

const setFriendList = (list: Ref<FriendT[]>) => vk.login(() => {
  vk.getFriendList()
    .then((apiList) => apiList.map((friend) => ({
      id: friend.id,
      name: `${friend.first_name} ${friend.last_name}`,
      list: 'all',
    } as FriendT)))
    .then((computedList) => { list.value = computedList; });
});

export default setFriendList;
