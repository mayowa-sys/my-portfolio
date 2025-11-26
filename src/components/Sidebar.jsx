import "./../styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="socials">
          <a href="https://www.linkedin.com/in/abdurrahman-balogun-41b48a32b/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-square-linkedin"></i>
          </a>
          <a href="mailto:mabdurrahman.balogun@gmail.com">
              <i className="fa-regular fa-envelope"></i>
          </a>
          <a href="https://github.com/mayowa-sys" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
          </a>
      </div>
      <div className="seperator">

      </div>
      <div className="signature">
        <h1>Mayowa</h1>
      </div>
    </div>

  );
}