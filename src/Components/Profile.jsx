import React from "react";
import { Options } from "./Options";




export const Profile = ({
  name,
  ocupation,
  location,
  email,
  telephone,
  image,
  birthday,
  sex,
}) => {
  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <img src={image} alt="profile_image" className="rounded-circle mx-auto d-block"
      style={{ width: "120px", height: "120px" }}/>
          <h1 className="home__title">
            <strong>{name}</strong>
          </h1>
          <h3 className="home__profession">{ocupation}</h3>
        </div>

        <div className="home__address bd-grid">
        <span className="home__information">
            <i className="bx bx-male-sign home__icon" /> {sex}
          </span>
        <span className="home__information">
            <i className="bx bx-calendar home__icon" /> {birthday}
          </span>
          <span className="home__information">
            <i className="bx bx-map home__icon" /> {location}
          </span>
          <span className="home__information">
            <i className="bx bx-envelope home__icon" /> {email}
          </span>
          <span className="home__information">
            <i className="bx bx-phone home__icon" /> {telephone}
          </span>
        </div>
      </div>
      <Options />
    </section>
  );
};
