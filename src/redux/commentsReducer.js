import {
  COMMENTS_LOAD,
  COMMENT_CREATE,
  COMMENT_DELETE,
  COMMENT_UPDATE,
} from './Types';

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  console.log('comments reducer', action);
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };
    case COMMENTS_LOAD:
      const commentsNew = action.data.map((comment) => {
        return {
          text: comment.name,
          id: comment.id,
        };
      });
      return {
        ...state,
        comments: commentsNew,
      };
    case COMMENT_UPDATE:
      const { data } = action;
      const { comments } = state;

      const nextComments = comments.map((comment) => {
        return comment.id === data.id ? data : comment;
      });

      return {
        ...state,
        comments: nextComments,
      };
    case COMMENT_DELETE:
      return (() => {
        const { id } = action;
        const { comments } = state;
        const newComments = comments.filter((res) => res.id !== id);

        return {
          ...state,
          comments: newComments,
        };
      })();

    default:
      return state;
  }
};
