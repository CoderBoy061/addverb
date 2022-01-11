import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

const MoreDeatils = () => {
  const { name } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://restcountries.com/v3.1/alpha?codes=${name}`)
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="more_details">
      {data.map((item, index) => (
        <div className="detials_card" key={index}>
          <div className="flag">
            <img src={item.flags.png} alt="" />
            <div>
              <p className="name">
                <strong>{item.name.common}</strong>
                <br />
                <span className="capital">Capital : {item.capital}</span>
              </p>
            </div>
          </div>
          <div className="details">
            <p>Region : {item.region} </p>
            <p>Borders : {`${item.borders.slice(0,4)}`} </p>
            <p>SubRegion : {item.subregion}</p>
            <p>Population: {item.population}</p>
            <div className="languages">
              Languages :{" "}
              {Object.keys(item.languages).map((data, index) => (
                <p key={index}> {data},</p>
              ))}
            </div>
          </div>
        </div>
      ))}
      <Button onClick={() => navigate("/")} style={{ marginTop: "1vh" }} className="btn">
        GoBack
      </Button>
    </div>
  );
};

export default MoreDeatils;
