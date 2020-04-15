import React from "react";
import { Link } from "gatsby";

import pannenServiceIcon from "../img/icons/icon_pannenservice.svg";
import serviceTerminIcon from "../img/icons/icon_servicetermin.svg";
import fahrzeuganboteIcon from "../img/icons/icon_fahrzeugangebote.svg";
import standorteIcon from "../img/icons/icon_unserestandorte.svg";
import kontaktIcon from "../img/icons/icon_kontakt.svg";

const Subheader = class extends React.Component {
  render() {
    return (
      <div className="subheader container">
        <Link to="/about">
          <img src={pannenServiceIcon} alt="Pannen-Service" />
          <p>Pannen-Service</p>
        </Link>
        <Link to="/about">
          <img src={serviceTerminIcon} alt="Pannen-Service" />
          <p>Servicetermin vereinbaren</p>
        </Link>
        <Link to="/about">
          <img src={fahrzeuganboteIcon} alt="Pannen-Service" />
          <p>Fahrzeug&shy;angebote</p>
        </Link>
        <Link to="/about">
          <img src={standorteIcon} alt="Pannen-Service" />
          <p>Unsere Standorte</p>
        </Link>
        <Link to="/about">
          <img src={kontaktIcon} alt="Pannen-Service" />
          <p>Kontakt</p>
        </Link>
      </div>
    );
  }
};

export default Subheader;
