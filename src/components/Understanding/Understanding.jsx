import './Understanding.css';
import { useHistory } from 'react-router-dom';

function Understanding() {
  const history = useHistory();
  
  const handleClick = () => {
    alert('');
    // change location
    history.push('/supported');
    // history.goBack();
  }
  return (
    <>
      <h2>How well are you understanding the content?</h2>
      <label>Understanding?</label>
      <input type="number"></input>
      <button onClick={handleClick}>NEXT</button>
    </>
  );
}

export default Understanding;
