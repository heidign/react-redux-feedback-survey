import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Comments.css';

function Comments() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [comments, setComments] = useState('');

  const handleClick = () => {
    if (comments && comments) {
      dispatch({
        type: 'SET_COMMENTS',
        payload: comments
      })
      history.push('/review');
      // history.goBack();
    } else {
      alert("Thank you! Please review your answers");
    }
  };

  const handleChange = (e) => {
    setComments(e.target.value);
  };

  return (
  <>
      <h2>Any comments you'd like to leave?</h2>
      <div><label>Comments?</label></div>
      <input type="text" onChange={handleChange} placeholder="comments or concerns"></input>
      <button onClick={handleClick}>NEXT</button>
  </>
  )
};

export default Comments;
