import { Link } from 'react-router-dom';
import Button from "./Button";
import logo from './assets/images/logo.png';

function Header({ links }) {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img
                  src={logo}
                  alt="logo"
                  style={{ "maxWidth": "112px" }}
                />
              </Link>

              <ul className="nav">
                {
                  links.map((link, i) => <Button text={link} key={link + i} />)
                }
              </ul>

              <a href="/" className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
