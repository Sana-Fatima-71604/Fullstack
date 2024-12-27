function Horizontalbar() {
  return (
    <div className="horizontalbar">
      <nav>
        <ul className="navbar-nav">
          <li className="nav-item">
            <form>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </li>
        </ul>
      </nav>
      <div className="div">
        <div className="div">Profile</div>
        <div className="div">Notifications</div>
      </div>
    </div>
  );
}

export default Horizontalbar;
