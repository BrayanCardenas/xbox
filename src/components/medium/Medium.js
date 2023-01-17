import "./Medium.scss";
function Medium({ description, name, url, button, i }) {
  return (
    <li className={`Content-li${i + 1} Li`}>
      <div className="Li-absolute">
        <h2 className="Li-h2">{name}</h2>
        <p className="Li-p">{description}</p>
        <a className="Li-a" href="##">
          {button}
        </a>
      </div>
      <div className="Li-div">
        <img className="Li-img" src={url} alt="" />
      </div>
    </li>
  );
}

export default Medium;
