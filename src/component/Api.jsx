import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";




const ApiCall = () => {
  /////////////// Api Call /////////////////////////

  const [newsData, setNewsData] = useState([]);
  const [topic, setTopic] = useState("Pizza");

  const getNewsAxios = async (q, country) => {
    const apiKey = "pub_62852933239bb387c16b740d8369e0b86ca30";
    const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=pizza`;

    try {
      const response = await axios.get(url);
      setNewsData(response.data.results);
    } catch (error) {
      console.error("Error fetching the news:", error);
    }
  };

  useEffect(() => {
    getNewsAxios(topic, "PK");
  },[]);

  return (
    <div className="">
      {newsData.map((e, i) => {
        return (
          <div key={i} className="">
            <img src={e.image_url} alt="" />
          </div>
        );
      })}
    </div>
  );
 
};

export default ApiCall;


