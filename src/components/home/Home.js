import "./Home.scss";
function Home() {
  const items = [
    {
      name: "Game Pass",
      url: "https://assets.xboxservices.com/assets/37/ec/37ec5a7a-08b4-466f-93e3-81fb5dd0b471.svg?n=Homepage-FY20_Home-Icons-0_XGP_72x56-01.svg",
    },
    {
      name: "Juegos",
      url: "https://assets.xboxservices.com/assets/e2/a8/e2a830ea-71e7-42fa-af94-7a07d66f150e.svg?n=Homepage-FY20_Home-Icons-0_Games_72x56-01.svg",
    },
    {
      name: "Consola",
      url: "https://assets.xboxservices.com/assets/12/74/12744081-03f9-42a4-87be-e869ddce3327.svg?n=Homepage-FY20_Home-Icons-0_Consoles_72x56-02.svg",
    },
    {
      name: "Accesorios",
      url: "https://assets.xboxservices.com/assets/29/ff/29ffa9b2-2d48-433b-abb7-99229bcbaa8b.svg?n=Homepage-FY20_Home-Icons-0_Accessories_72x56-01.svg",
    },
    {
      name: "Ofertas",
      url: "https://assets.xboxservices.com/assets/50/9a/509a35c3-472d-46ed-b29d-2f47adca7be9.svg?n=Homepage-FY20_Home-Icons-0_Deals_72x56-01.svghttps://assets.xboxservices.com/assets/37/ec/37ec5a7a-08b4-466f-93e3-81fb5dd0b471.svg?n=Homepage-FY20_Home-Icons-0_XGP_72x56-01.svg",
    },
    {
      name: "Iniciar Sesión",
      url: "https://assets.xboxservices.com/assets/30/ab/30abec76-ab4c-4275-b0ca-725a6eb2f85f.svg?n=Homepage-FY20_Home-Icons-0_Sign-In_72x56-01.svg",
    },
  ];
  return (
    <>
      <div>
        <img
          src="https://assets.xboxservices.com/assets/b2/e2/b2e2f311-5e0c-4f97-b3bb-b1a0d5e43bf5.jpg?n=XSS_Page-Hero-1084_Overwatch-2_1920x720_02.jpghttps://assets.xboxservices.com/assets/b2/e2/b2e2f311-5e0c-4f97-b3bb-b1a0d5e43bf5.jpg?n=XSS_Page-Hero-1084_Overwatch-2_1920x720_02.jpg"
          alt=""
        />
      </div>
      <div className="Contenido">
        <ul className="Contenido-ul">
          {items.map(({ name, url }, i) => {
            return (
              <li key={i} className="Contenido-li">
                <a href="1">
                  <div>
                    <img className="Contenido-img" src={url} alt={name} />
                  </div>
                  <span className="Contenido-span">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;
