/* eslint-disable no-param-reassign */
import { FriendT } from './types';

export const onDrop = (list: FriendT[], listName: string) => (evt: DragEvent) => {
  if (!evt?.dataTransfer) {
    return;
  }

  const friendID = evt.dataTransfer.getData('friendID');
  const friend = list.find((item) => item.id === +friendID);

  if (!friend) {
    return;
  }
  friend.list = listName;

  const target = evt.target as HTMLElement;
  const listDiv = target.classList.contains('list') ? target : target.parentElement || target;
  listDiv.scrollTop = listDiv.scrollHeight;
};

export const startDrag = (evt: DragEvent, friend: FriendT) => {
  if (!evt?.dataTransfer) {
    return;
  }

  evt.dataTransfer.dropEffect = 'move';
  evt.dataTransfer.effectAllowed = 'move';
  evt.dataTransfer.setData('friendID', String(friend.id));
};
