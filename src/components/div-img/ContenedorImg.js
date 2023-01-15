import "./ContenedorImg.scss";
function ContenedorImg({type, url, i}) {
  return (
    <li key={url} className={`Content-li${i + 1}`}>
      <img className="Content-img" src={url} alt="" />
    </li>
  );
}

export default ContenedorImg;
