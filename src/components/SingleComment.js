import { useState, useEffect } from 'react';
import { commentUpdate, commentDelete } from '../redux/action';
import { useDispatch } from 'react-redux';

const SingleComment = ({ data }) => {
  const [commentText, setCommentText] = useState('');
  const { text, id } = data;
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id))
  };
  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);
  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div className="comments-item-delete" onClick={handleDelete}>
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
};

export default SingleComment;
