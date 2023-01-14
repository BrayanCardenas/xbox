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
            </li>
            <li className="Nav-li">
              <button className="Nav-icon">Juegos</button>
            </li>
            <li className="Nav-li">
              <button className="Nav-icon">Dispositivos</button>
            </li>
            <li className="Nav-li">
              <button className="Nav-icon">Comunidad</button>
            </li>
            <li className="Nav-li">
              <button className="Nav-icon">Más</button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="Header-container">
        <nav className="Header-nav Nav">
          <ul className="Nav-ul">
            <li className="Nav-li">
              <button className="Nav-icon">Todo Microsoft</button>
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
