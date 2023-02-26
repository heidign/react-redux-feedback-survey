import './Feeling.css';
import { useHistory } from 'react-router-dom';

function Feeling() {
    
    const history = useHistory();

    const handleClick = () => {
        alert('')
        // change location
        history.push('/understanding');
        // history.goBack();
    };
    return (
        <>
            <body>
            <h2>How are you feeling today?</h2>
            <label>Feeling?</label>
            <input type="number"></input>
            <button onClick={handleClick}>NEXT</button>
            </body>
        </>
    )
};

export default Feeling;