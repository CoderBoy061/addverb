import { Button } from 'antd'
import React from 'react'


const SearchResult = ({result}) => {
    return (
        <div className="search_detail">
        {result.map((item, index) => (
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
              <p>Borders : {`${item.borders}`} </p>
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
        <Button onClick={()=>window.location.reload()} style={{marginTop:"1vh"}} className='btn'>GoBack</Button>
        
      </div>
    )
}

export default SearchResult
