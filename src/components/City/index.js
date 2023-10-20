import React from "react";

const City = ({ city }) => {
  console.log(city);
  return (
    <div>
      <div className="container">
        <table>
          <tr>
            <td className="img" colSpan="2"><img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}.png`} alt="weather icon"/></td>
          </tr>
          <tr>  
            <td><h1>Sıcaklık :</h1></td>
            <td><h1 className="sıcaklık">{city.main.temp} °C</h1></td>
          </tr>
          <tr>  
            <td><h1>Şehir :</h1></td>
            <td><h1 className="sehir">{city.name}</h1></td>
          </tr>
          <tr>  
            <td><h1>DURUM :</h1></td>
            <td><h1 className="durum">{city.weather[0].main}</h1> </td>
          </tr>
          <tr>  
            <td><h1>Enlem :</h1></td>
            <td><h1 className="durum">{city.coord.lat}</h1> </td>
          </tr>
          <tr>  
            <td><h1>Boylam :</h1></td>
            <td><h1 className="durum">{city.coord.lon}</h1> </td>
          </tr>

        </table>
        
        
        
          
      </div>
    </div>
  );
};

export default City;