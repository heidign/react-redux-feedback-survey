import './Comments.css';
import { useHistory } from 'react-router-dom';

function Comments() {
  const history = useHistory();
  
  const handleClick = () => {
    alert('');
    // change location
    history.push('/review');
    // history.goBack();
  }
  return (
  <>
      <h2>Any comments you'd like to leave?</h2>
      <label>Comments</label>
      <input type="number"></input>
      <button onClick={handleClick}>NEXT</button>
  </>
  )
};

export default Comments;
