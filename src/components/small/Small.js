import { useState, useEffect } from "react";
import "./Small.scss";
function Small({ description, name, url, url2, button, i }) {
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

  return (
    <li
      className={
        i !== 12 && i !== 9
          ? `Content-li${i + 1} Info`
          : `Content-li${i + 1} Info Info-noColor`
      }
    >
      <div className="Info-div Info-div--text">
        <h2 className="Info-h2">{name}</h2>
        <p className="Info-p">{description}</p>
        <a className="Info-a" href="##">
          {button}
        </a>
      </div>
      <div
        className={
          i === 9 ? "Info-div Info-div--img" : "Info-div Info-div--img"
        }
      >
        <img className="Info-img" src={screen < 1083 ? url2 : url} alt="" />
      </div>
    </li>
  );
}

export default Small;
