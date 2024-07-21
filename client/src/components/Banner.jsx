import axios from 'axios'
import { useAuth } from '../context/AuthContext';

function Banner() {
     const {logout} = useAuth()

    return ( 
        <div id='banner'>
             <h1>BudgetWise</h1>
             <button onClick={logout}>Logout</button>
        </div>
     );
}

export default Banner;