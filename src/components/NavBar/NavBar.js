import {Link} from 'react-router-dom'
import './NavBar.css';

export default function NavBar() {
  return (
    <nav className="NavBar">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/courses">Courses</Link>
        <Link className="disabled" to="/results">Results</Link>
    </nav>
  );
}


