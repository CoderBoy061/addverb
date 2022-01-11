import React  from "react";
import { NavLink } from "react-router-dom";
import "./country.css";

const CountryDetails = ({ data, index }) => {
  let lang = [];
  for (const value of Object.entries(data.languages)) {
    lang.push(value);
  }
  return (
    <>
    <NavLink to={`/details/${data.cca3}`} style={{textDecoration:"none",color:"black"}}>
      <div
        className="card"
       
        key={index}
      >
        <div className="flag">
          <img src={data.flags.png} alt="" />
          <div>
            <p className="name">
              <strong>{data.name.common}</strong>
              <br />
              <span className="capital">Capital : {data.capital}</span>
            </p>
          </div>
        </div>
        <div className="details">
          <p>Region : {data.region} </p>
          <p>SubRegion : {data.subregion}</p>
          <p>Population: {data.population}</p>
          <div className="languages">
            Languages :
            {lang.map((data, index) => (
              <p key={index}>
                <strong>{data[1]},</strong>
              </p>
            ))}
          </div>
        </div>
      </div>
      </NavLink>
    </>
  );
};

export default CountryDetails;
