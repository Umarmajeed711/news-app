

import { useState } from "react";
import { useEffect } from "react";

const DummyApi = () => {

  const [posts , setPosts] = useState([])

  useEffect(() => {
    // console.log("useEffect")
    fetch('https://newsdata.io/api/1/latest?apikey=pub_62852354a3f0a8c0584b49adc666707c16eba&q=pizza')
    .then(res => res.json())
    .then(res => {setPosts(res.posts)})
    
  },[])

 

  return (
      <div className="">
        {posts.map((e, i) => {
          return (
            <div key={i} className="">
              <img src={e.image_url} alt="" />
            </div>
          );
        })}
      </div>
    );
}

export default DummyApi;