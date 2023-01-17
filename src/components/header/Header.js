import "./Header.scss";
function Header() {
  return (
    <header className="Header">
      <div className="Header-container">
        <img
          className="Header-img"
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
          alt=""
        />
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
    </header>
  );
}

export default Header;
