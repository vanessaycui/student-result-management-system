import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <h1>SRMS</h1>
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/results">Results</Link>
    </nav>
  );
}
