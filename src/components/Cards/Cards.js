import { useState, useEffect } from "react";
import "./Cards.scss";
function Cards({ name, description, url, url2, button, i, type }) {
  const [screen, setScreen] = useState(window.innerWidth);
  const handleScreen = () => {
    setScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreen);
    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);

  return type === "small" ? (
    <div className={i !== 12 && i !== 9 ? "Small" : "Small Small-noColor"}>
      <div className="Small-div Small-div--text">
        <h2 className="Small-h2">{name}</h2>
        <p className="Small-p ">{description}</p>
        <a className="Small-a " href="##">
          {button}
        </a>
      </div>
      <div className="Small-div Small-div--img">
        <img className="Small-img" src={screen < 1083 ? url2 : url} alt="" />
      </div>
    </div>
  ) : (
    <div className="Medium">
      <div className="Medium-div">
        <h2 className="Medium-h2">{name}</h2>
        <p className="Medium-p">{description}</p>
        <a className="Medium-a" href="##">
          {button}
        </a>
      </div>
      <div className="Medium-div2">
        <img className="Medium-img" src={url} alt="" />
      </div>
    </div>
  );
}
export default Cards;
