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
      <ul className="rrss">
        <li>Sigue a Xbox</li>
        <li><img src="https://assets.xboxservices.com/assets/4c/41/4c412e0b-fc0f-4fad-adfe-1942f49d3e10.svg?n=Xbox-Follow-Footer_Image-0_Mail_32x32.svg" alt="" /></li>
        <li><img src="https://assets.xboxservices.com/assets/c5/db/c5db8abc-e6d8-465a-9871-77918475916b.svg?n=Xbox-Follow-Footer_Image-0_Facebook_32x32.svg" alt="" /></li>
        <li><img src="https://assets.xboxservices.com/assets/62/dc/62dc63f3-8f41-4fe3-b55c-a8a3d81eaf9e.svg?n=Xbox-Follow-Footer_Image-0_Twitter_32x32.svg" alt="" /></li>
        <li><img src="https://assets.xboxservices.com/assets/33/bd/33bd6eea-e65b-41ba-bba0-dc1d0fa5a0e9.svg?n=Xbox-Follow-Footer_Image-0_Instagram_32x32.svg" alt="" /></li>
      </ul>
    </div>
  );
}

export default Content;
