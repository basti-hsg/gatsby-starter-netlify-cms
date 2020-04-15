import React from "react";
import { Link } from "gatsby";
import Subheader from "./Subheader";

import logo from "../img/logo_MAZ.svg";
import audiLogo from "../img/logos_hersteller/Audi_logo_klein.png";
import vwLogo from "../img/logos_hersteller/VW_logo_klein.png";
import skodaLogo from "../img/logos_hersteller/Skoda_logo_klein.png";
import vwNfLogo from "../img/logos_hersteller/VW_NF_logo_klein.png";
import fiatLogo from "../img/logos_hersteller/Fiat_logo_klein.png";
import fiatNfLogo from "../img/logos_hersteller/Fiat_NF_logo_klein.jpg";
import seatLogo from "../img/logos_hersteller/Seat_logo_klein.png";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="navbar-wrapper box-shadow">
          <div className="navbar-top container">
            <div className="logo-wrapper">
              <img src={logo} alt="Logo MAZ" />
            </div>
            <div className="hersteller-bar">
              <Link to="/about" className="box-shadow">
                <img src={vwLogo} alt="VW-Logo" />
              </Link>
              <Link to="/about" className="box-shadow">
                <img src={audiLogo} alt="Audi-Logo" />
              </Link>
              <Link to="/about" className="box-shadow">
                <img src={skodaLogo} alt="Skoda-Logo" />
              </Link>
              <Link to="/about" className="box-shadow">
                <img src={seatLogo} alt="Seat-Logo" />
              </Link>
              <Link to="/about" className="box-shadow">
                <img src={vwNfLogo} alt="VW-Nutzfahrzeuge-Logo" />
              </Link>
              <Link to="/about" className="box-shadow">
                <img src={fiatLogo} alt="Fiat-Logo" />
              </Link>
              <Link to="/about" className="box-shadow">
                <img src={fiatNfLogo} alt="Fiat-Nutzfahrzeuge-Logo" />
              </Link>
            </div>
          </div>
          <nav
            className="navbar"
            role="navigation"
            aria-label="main-navigation"
          >
            <div className="container">
              {/* Hamburger menu */}
              <div className="logo-wrapper logo-wrapper-desktop">
                <img src={logo} alt="Logo MAZ" />
              </div>
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
              <div
                id="navMenu"
                className={`navbar-menu ${this.state.navBarActiveClass}`}
              >
                <div className="navbar-start has-text-centered">
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">Angebote</a>

                    <div className="navbar-dropdown">
                      <Link className="navbar-item" to="/about">
                        Fahrzeugangebote
                      </Link>
                      <Link className="navbar-item" to="/about">
                        Nutzfahrzeuge
                      </Link>
                      <Link className="navbar-item" to="/about">
                        Marken
                      </Link>
                      <Link className="navbar-item" to="/about">
                        Zubehör-Prospekt
                      </Link>
                    </div>
                  </div>
                  <Link className="navbar-item" to="/about">
                    MAZ Autorate
                  </Link>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">Service & Werkstatt</a>

                    <div className="navbar-dropdown">
                      <Link className="navbar-item" to="/about">
                        Werkstatttermin vereinbaren
                      </Link>
                      <Link className="navbar-item" to="/about">
                        Probefahrt vereinbaren
                      </Link>
                      <Link className="navbar-item" to="/about">
                        Serviceleistungen
                      </Link>
                      <Link className="navbar-item" to="/about">
                        Zubehör-Prospekt
                      </Link>
                    </div>
                  </div>
                  <Link className="navbar-item" to="/blog">
                    e-Mobilität
                  </Link>
                  <Link className="navbar-item" to="/contact">
                    Geschäftskunden
                  </Link>
                  <Link className="navbar-item" to="/contact/examples">
                    Karriere
                  </Link>
                  <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">Über uns</a>

                    <div className="navbar-dropdown">
                      <Link className="navbar-item" to="/about">
                        Feedback
                      </Link>
                      <Link className="navbar-item" to="/about">
                        Standorte
                      </Link>
                      <Link className="navbar-item" to="/about">
                        Kontakt
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-end has-text-centered"></div>
              </div>
            </div>
          </nav>
        </div>
        <Subheader />
      </React.Fragment>
    );
  }
};

export default Navbar;
