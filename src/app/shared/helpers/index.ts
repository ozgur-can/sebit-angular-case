import { IPost, PostOrder } from '../types';

// function for sorting in service
export const sortPostsByDate = (posts: IPost[], order: PostOrder) => {
  return posts.sort((a: IPost, b: IPost) => {
    if (order === PostOrder.ASC) {
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
    } else {
      return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
    }
  });
};
