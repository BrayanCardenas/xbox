import { useState } from "react";
import "./Header.scss";
function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  console.log(menu);
  return (
    <header className="Header">
      <div className="Header-icon">
        <img
          className="Header-img"
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
          alt=""
        />
        <div
          onClick={toggleMenu}
          className={`button ${menu ? "open" : "".trim()}`}
        >
          <svg
            height="32px"
            id="Layer_1"
            // style="enable-background:new 0 0 32 32;"
            version="1.1"
            viewBox="0 0 32 32"
            width="32px"
            // xml:space="preserve"
            // xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
          </svg>
        </div>
      </div>

      {/* Menu */}
      <div className={`Menu ${menu ? "open" : "".trim()}`}>
        <div className="Header-menu">
          <img
            className="Header-img Header-img--xbox"
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW4ESm?ver=c63e"
            alt=""
          />

          <nav className="Header-nav Nav">
            <ul className="Nav-ul">
              <li className="Nav-li">
                <button className="Nav-icon">Game Pass</button>
                <svg
                  width={25}
                  height={25}
                  fill="none"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                >
                  <path d="M15.25 10.75 12 14.25l-3.25-3.5" />
                </svg>
              </li>
              <li className="Nav-li">
                <button className="Nav-icon">Juegos</button>
                <svg
                  width={25}
                  height={25}
                  fill="none"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                >
                  <path d="M15.25 10.75 12 14.25l-3.25-3.5" />
                </svg>
              </li>
              <li className="Nav-li">
                <button className="Nav-icon">Dispositivos</button>
                <svg
                  width={25}
                  height={25}
                  fill="none"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                >
                  <path d="M15.25 10.75 12 14.25l-3.25-3.5" />
                </svg>{" "}
              </li>
              <li className="Nav-li">
                <button className="Nav-icon">Comunidad</button>
                <svg
                  width={25}
                  height={25}
                  fill="none"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                >
                  <path d="M15.25 10.75 12 14.25l-3.25-3.5" />
                </svg>{" "}
              </li>
              <li className="Nav-li">
                <button className="Nav-icon">Más</button>
                <svg
                  width={25}
                  height={25}
                  fill="none"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                >
                  <path d="M15.25 10.75 12 14.25l-3.25-3.5" />
                </svg>
              </li>
            </ul>
          </nav>
        </div>

        <div className="Header-container">
          <nav className="Header-nav Nav">
            <ul className="Nav-ul">
              <li className="Nav-li">
                <button className="Nav-icon">Todo Microsoft</button>
                <svg
                  width={25}
                  height={25}
                  fill="none"
                  stroke="#262626"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                >
                  <path d="M15.25 10.75 12 14.25l-3.25-3.5" />
                </svg>{" "}
              </li>
              <li className="Nav-li">Buscar</li>
              <li className="Nav-li">Carro</li>
              <li className="Nav-li">Iniciar Sesión </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
