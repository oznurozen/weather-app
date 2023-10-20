import axios from "axios"
import './App.css';
import { useEffect, useState } from "react";
import City from "./components/City"
function App() {

  
 
  const [ search, setSearch] = useState("");
  const [city, setCity] = useState();

  // const key = "1ad80099f80ab2ee3cbf8652265aca4e";
  
  useEffect(() => { //güncellemeleri anlık yakalamak için kullanıyoruz
    async function getApi() {   //asyn await ile verileri daha düzgün yazmayı sağlıyoruz. sıraya koyar
     const key = process.env.REACT_APP_WEATER_API_KEY;
      try {  // yapılarda hata yakalamak için kullanılır... try catch
        const {data} = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Zonguldak&appid=${key}&units=metric`
        );
        setCity(data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi(); //usseEffect hook undan bunu çağarmamız gerekiyor
  }, [search]); //her yeniden render edildiğinde search ı çağar
  console.log(search);

  
  return (
    <div className="App">
     <div className="container">
      <input  onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Şehir Giriniz"/>
     </div>
     <div> {city && <City city={city} />}</div>
    
    </div>
  );
}

export default App;
