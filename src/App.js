import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집!";
  const [titles, setTitles] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "맛집 추천",
  ]);
  const [like, setLike] = useState(0);

  const handleLike = () => {
    setLike(like + 1);
  };

  return (
    <div className="app">
      <div className="black-nav">
        <h4>Blog</h4>
      </div>
      <div className="list">
        <h4>
          {titles[0]} <span onClick={handleLike}>♥</span> {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{titles[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{titles[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
