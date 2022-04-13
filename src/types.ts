/* eslint-disable camelcase */
export type FriendT = {
  id: number,
  name: string,
  photo_50?: string,
  university_name?: string,
  list: string,
};

export interface ApiFriendI {
  id: number,
  first_name: string,
  last_name: string,
  photo_50?: string,
  university_name?: string,
}

export type ApiFriendListT = {
  response: {
    count: number,
    items: Array<ApiFriendI>
  }
}
