import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-left">
        <h2>Sagar | Developer<span>.</span></h2>
      </div>

      <div className="nav-center">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="nav-right">
        <a
          href="/sagarresume.pdf"
          target="_blank"
          rel="noreferrer"
          className="resume-btn"
        >
          Resume
        </a>
      </div>

    </nav>
  );
}

export default Navbar;