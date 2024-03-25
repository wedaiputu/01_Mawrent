import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-white">
      <div className="flex-1">
        <Link to={"/"}>
        <a className="btn btn-ghost text-xl">Logo</a>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-black">
          <li>
            <Link to={"/beranda"}>
              <a>Beranda</a>
            </Link>
          </li>
          <li>
            <Link to={"/listMobil"}>
              <a>List Beranda</a>
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <details>
              <summary>Language</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <a> English </a>
                </li>
                <li>
                  <a> Bahasa</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
