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
            <li className="Nav-li">Game Pass</li>
            <li className="Nav-li">Juegos</li>
            <li className="Nav-li">Dispositivos</li>
            <li className="Nav-li">Comunidad</li>
            <li className="Nav-li">Más</li>
          </ul>
        </nav>
      </div>

      <div className="Header-container">
        <nav className="Header-nav Nav">
          <ul className="Nav-ul">
            <li className="Nav-li" >Todo Microsoft</li>
            <li className="Nav-li" >Buscar</li>
            <li className="Nav-li" >Carro</li>
            <li className="Nav-li" >Iniciar Sesión</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
