import React, { useState, useEffect } from "react";
import "./Home.css";
import Post from "../../components/post/Post";

const Home = () => {
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const apicall = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await api.json();

      if (api.ok) {
        setResult(jsonData);
      }
      if (!api.ok) {
        setError(jsonData.error);
      }
    };
    apicall();
  }, []);

  return (
    <div className="container">
      {result &&
        result.map((post) => {
          return <Post post={post} key={post?.id} />;
        })}
      {error && <h3>{error}</h3>}
    </div>
  );
};

export default Home;
