import styles from './index.module.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { State } from '../../state/reducers';

export default function Navbar() {
  const userName = useSelector((state: State) => state.login);
    return (
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.title}><Link to="/jokes">Programming jokes</Link></li>
  
        
          <>
          {userName && <li>Welcome, {userName} !</li>}
          {!userName && <li className="btn btn-success"><Link to="/get-started">Join Us</Link></li>}
          </>
          
  
        </ul>
      </nav>
    )
  }