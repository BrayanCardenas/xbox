import data from "../../data/data.json";
import Medium from "../medium/Medium";
import Small from "../small/Small";
import "./Content.scss";
function Content() {
  const { contenido } = data[0];

  return (
    <div className="Content">
      <ul className="Content-ul">
        {contenido.map(({ name, description, button, url, url2, type }, i) => {
          return type !== "small" ? (
            <Medium
              key={url}
              name={name}
              url={url}
              button={button}
              description={description}
              i={i}
            />
          ) : (
            <Small
              key={url}
              name={name}
              url={url}
              url2={url2}
              button={button}
              description={description}
              i={i}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Content;
