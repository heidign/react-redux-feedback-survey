import './Supported.css';
import { useHistory } from 'react-router-dom';

function Supported() {
    const history = useHistory();
    
    const handleClick = () => {
        alert('');
        // change location
        history.push('/comments');
        // history.goBack();
      }
    return (
        <>
            <h2>How well are you being supported?</h2>
            <label>Support?</label>
            <input type="number"></input>
            <button onClick={handleClick}>NEXT</button>
        </>
    )
};

export default Supported;
