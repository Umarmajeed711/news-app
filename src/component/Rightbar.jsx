import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./rightbar.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="d-flex justify-content-between">
        <h1>Top News</h1>
      </div>

      <div className="d-flex align-items-center gap-3">
        <input
          type="text"
          placeholder="search "
          style={{
            width: "19vw",
            borderRadius: "5px",
            boxShadow: "0 0 3px rgba(0,0,0,.5)",
          }}
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>

      <div className="d-flex flex-column flex-wrap gap-3 latest">
        <div>Today latest news</div>

        {/* News div */}
        <div className="friendRequest">
          <div>
            <img
              src="https://photo-cdn.urdupoint.com/media/2024/12/_3/730x425/pic_1734975194_f9ea7.jpeg"
              style={{
                border: "1px solid black",
                width: "10vw",
                height: "13vh",
              }}
            />
          </div>
          <div className="d-flex justify-content-center column-gap-2 flex-column ">
            <div>
              <p>Dubai Police concludes 4th edition </p>
            </div>
          </div>
        </div>

        {/* News div */}
        <div className="friendRequest">
          <div>
            <img
              src="https://mma.prnewswire.com/media/2585170/CasinoAus_Logo.jpg?p=publish"
              style={{
                border: "1px solid black",
                width: "10vw",
                height: "13vh",
              }}
            />
          </div>
          <div className="d-flex justify-content-center column-gap-2 flex-column ">
            <div>
              <p>Social Media Ban in Australia What Online Casinos?</p>
            </div>
          </div>
        </div>

        {/* News div */}
        <div className="friendRequest">
          <div>
            <img
              src="https://www.phoneworld.com.pk/wp-content/uploads/2024/12/Screenshot-2024-12-23-204457.png"
              style={{
                border: "1px solid black",
                width: "10vw",
                height: "13vh",
              }}
            />
          </div>
          <div className="d-flex justify-content-center column-gap-2 flex-column ">
            <div>
              <p> Your Smartphone’s Hidden Superpower</p>
            </div>
          </div>
        </div>

        {/* News div */}
        <div className="friendRequest">
          <div>
            <img
              src="https://photo-cdn.urdupoint.com/media/2024/12/_3/730x425/pic_1734975132.jpg"
              style={{
                border: "1px solid black",
                width: "10vw",
                height: "13vh",
              }}
            />
          </div>
          <div className="d-flex justify-content-center column-gap-2 flex-column ">
            <div>
              <p>Sheffield United takeover completed by COH Sports</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
