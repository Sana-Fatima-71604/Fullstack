import { Link } from "react-router-dom";

function Sidenav() {
  const bar = [
    "Dashboard",
    "My Courses",
    "Messages",
    "Reports",
    "Settings",
    "Log",
  ];
  const links = [
    "/Dashboard",
    "/My_Courses",
    "/Messages",
    "/Reports",
    "/Settings",
  ];

  return (
    <nav className="sidenav">
      <h2 className="h2" style={{ marginBottom: "80px" }}>
        {"<LEARN/>"}
      </h2>
      <ul className="navbar-nav">
        {bar.map((bar, index) => {
          return (
            <li key={index}>
              <Link to={links[index]} className="link">
                {bar}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidenav;
