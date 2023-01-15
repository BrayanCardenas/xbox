import Data from "../data/data.json";
import "./Content.scss";
function Content() {
  return (
    <div className="Content">
      <ul className="Content-ul">
        {Data.map(({ name, description, button, url, type }, i) => {
          if (type === "full") {
            return (
              <li key={url} className={`Content-li${i + 1}`}>
                <div>
                  <img className="Content-img" type={type} src={url} alt="" />
                </div>
              </li>
            );
          }
          return (
            <li key={url} className={`Content-li${i + 1}  Content-info Info`}>
              <div className="Info-div Info-div--text">
                <h2 className="Info-h2" >{name}</h2>
                <p className="Info-p" >{description}</p>
                <a className="Info-a"  href="##">{button}</a>
              </div>
              <div className="Info-div Info-div--img">
                <img className="Info-img" type={type} src={url} alt="" />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Content;
