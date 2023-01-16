import "./Medium.scss";
function Medium({ description, name, url, button, i }) {
  return (
    <li className={`Content-li${i + 1} relative`}>
      <div className="absolute">
        <h2 className="relative-h2">{name}</h2>
        <p className="relative-p">{description}</p>
        <a className="relative-a" href="##">
          {button}
        </a>
      </div>
      <div className="">
        <img className="" src={url} alt="" />
      </div>
    </li>
  );
}

export default Medium;
