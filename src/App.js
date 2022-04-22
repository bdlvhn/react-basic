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
  const [open, setOpen] = useState(false);

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

      <button
        onClick={() => {
          const copy = [...titles];
          copy.sort();
          setTitles(copy);
        }}
      >
        정렬
      </button>
      <button
        onClick={() => {
          const copy = [...titles];
          copy[0] = "20대 코트 추천";
          setTitles(copy);
        }}
      >
        수정
      </button>
      <button onClick={() => setOpen(!open)}>Modal</button>

      {open ? <Modal></Modal> : null}
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
};

export default App;
