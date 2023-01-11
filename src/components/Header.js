import Button from "./Button";

function Header() {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="index.html" className="logo">
                <img
                  src="assets/images/logo.png"
                  alt="logo"
                  style={{ "maxWidth": "112px" }}
                />
              </a>

              <ul className="nav">
                <Button text='Home' />
                <Button text='Services' />
                <Button text='Projects' />
                <Button text='Pages' />
                <Button text='Contact'/>
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
