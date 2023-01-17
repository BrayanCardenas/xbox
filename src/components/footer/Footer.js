import "./Footer.scss";
function Footer() {
  return (
    <div className="Footer">
      <ul className="Footer-ul">
        <li className="Footer-li">
          <h3 className="Footer-h3">Examinar</h3>
          <span className="Footer-span">Xbox consolas</span>
          <span className="Footer-span">Juegos de Xbox</span>
          <span className="Footer-span">Xbox Game Pass</span>
          <span className="Footer-span">Accesorios Para Xbox</span>
        </li>
        <li className="Footer-li">
          <h3 className="Footer-h3">Recursos</h3>
          <span className="Footer-span">Noticias de Xbox</span>
          <span className="Footer-span">Soporte técnicos de Xbox</span>
          <span className="Footer-span">Comentarios</span>
          <span className="Footer-span">Estándares de la comunidad</span>
          <span className="Footer-span">
            Advertencia sobre ataques fotosensibles
          </span>
        </li>
        <li className="Footer-li">
          <h3 className="Footer-h3">Microsoft Store</h3>
          <span className="Footer-span">Cuenta de Microsoft</span>
          <span className="Footer-span">
            Soporte técnico de Microsoft Store
          </span>
          <span className="Footer-span">Devoluciones</span>
          <span className="Footer-span">Seguimiento de pedidos</span>
        </li>
        <li className="Footer-li">
          <h3 className="Footer-h3">Para desarrolladores</h3>
          <span className="Footer-span">Juegos</span>
          <span className="Footer-span">ID@Xbox</span>
          <span className="Footer-span">Windows</span>
          <span className="Footer-span">Creators Program</span>
        </li>
      </ul>
      <div className="Footer-info">
        <div className="Info-locale">
          <img className="Footer-img"
            src="https://img.icons8.com/wired/64/null/globe-earth.png"
            alt=""
          />{" "}
          <span>Español (Colombia)</span>
        </div>
        <div>
          <ul className="Info-ul">
            <li className="Locale-li">Ponte en contacto con Microsoft</li>
            <li className="Locale-li">Privacidad y cookies</li>
            <li className="Locale-li">Aviso legal</li>
            <li className="Locale-li">Marcas Registradas</li>
            <li className="Locale-li">Avisos sobre terceros</li>
            <li className="Locale-li">Sobre nuestra publicidad</li>
            <li className="Locale-li">© Microsoft 2023</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
