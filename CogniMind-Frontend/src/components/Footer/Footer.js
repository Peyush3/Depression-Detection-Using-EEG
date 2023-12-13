import "./Footer.css";
function Footer() {
  return (
    <div className="Footer">
      <footer className="container py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link px-2 text-muted">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="/profile" className="nav-link px-2 text-muted">
              Profile
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
