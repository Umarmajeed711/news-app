import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./component/Header";
import LeftBar from "./component/leftbar";
import RightBar from "./component/Rightbar";
import "bootstrap/dist/css/bootstrap.min.css";

////
import Card from "react-bootstrap/Card";
import "./component/news.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  /////////////// Api Call /////////////////////////

  const [newsData, setNewsData] = useState([]);

  // set category
  const [topic, setTopic] = useState("Corruption");

  // set country
  const [country, setCountry] = useState("PK");

  const getNewsAxios = async (q, country) => {
    const apiKey = "pub_62852933239bb387c16b740d8369e0b86ca30";
    const url = `https://newsdata.io/api/1/news`;

    try {
      // const response = await axios.get(url, {
      //   params: {
      //     apikey: apiKey, // Your API Key
      //     q: q, // Search query for Facebook-related news
      //     country: country, // Fetch news for Pakistan
      //     language: "en", // English
      //     // from_date: "2023-01-19",
      //     // to_date: "2023-01-25"
      //   },
      // });
      const response = await axios.get(
        `${url}?apikey=${apiKey}&q=${q}&country=${country}&language=en`
      );
      setNewsData(response.data.results);
      console.log(response.data.results);
    } catch (error) {
      console.error("Error fetching the news:", error);
    }
  };

  useEffect(() => {
    getNewsAxios(topic, country);
  }, [topic, country]);

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <LeftBar />
        <div className="pt-4 d-flex flex-column row-gap-4">
          {/* new Navbar */}
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h1 style={{ textShadow: "0 0 7px rgba(0,0,0,.5)" }}>{topic}</h1>
            </div>

            <div className="d-flex gap-2">
              <div
                onChange={(e) => {
                  setTopic(e.target.value);
                }}
                value={topic}
              >
                <h5>Topic</h5>
                <select className="dropDown">
                  <option value="Corruption">Corruption</option>
                  <option value="Sports">Sports</option>
                  <option value="Education">Education</option>
                  <option value="Politics">Polictics</option>
                  <option value="Technology">Technology</option>
                  <option value="Terrorism">Terrorism</option>
                </select>
              </div>

              {/* Set COuntry */}
              <div
                onChange={(e) => {
                  setCountry(e.target.value);
                }}
                value={country}
              >
                <h5>Country</h5>
                <select className="dropDown">
                  <option value="PK">Pakistan</option>
                  <option value="IN">India</option>
                  <option value="US">America</option>
                  <option value="Saudia">Saudia</option>
                  <option value="China">China</option>
                  <option value="Russia">Russia</option>
                </select>
              </div>
            </div>
          </div>
          {newsData?.map((ele, i) => {
            return (
              <div className="postCard" key={i}>
                <Card style={{ width: 450 }}>
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between ">
                      <div className="postDetailSec">
                        <div className="profilePicture">
                          <img src={ele.source_icon} alt="" />
                        </div>
                        <div className="">
                          <h6>{ele.source_name}</h6>
                          <p>{ele.pubDate}</p>
                        </div>
                      </div>

                      <div className="d-flex column-gap-3">
                        <FontAwesomeIcon icon={faClose} />
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </div>
                    </div>
                    <div className="postContent pt-3">
                      <img src={ele?.image_url} alt="" />

                      <Card.Title>{ele?.title}</Card.Title>
                      <Card.Text>{ele?.description}</Card.Text>
                    </div>

                    <div className="d-flex align-items-center justify-content-between  pt-3">
                      <p className="newsButton">
                        <Card.Link href={ele?.source_url}>
                          {ele?.source_name}
                        </Card.Link>
                      </p>
                    </div>
                  </Card.Body>
                  {/* <RightBar  image={ele?.image_url} title={ele?.title} /> */}
                </Card>
              </div>
            );
          })}
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default App;
