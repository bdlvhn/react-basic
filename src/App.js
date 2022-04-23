import "./App.css";
import React, { useState } from "react";

function App() {
  const [titles, setTitles] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "맛집 추천",
  ]);
  const [like, setLike] = useState(new Array(titles.length).fill(0));
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState(0);
  const [value, setValue] = useState("");

  const handleLike = (i) => {
    const copy = [...like];
    copy[i] = copy[i] + 1;
    setLike(copy);
  };

  return (
    <div className="app">
      <div className="black-nav">
        <h4>Blog</h4>
        <div>
          <input
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              setTitles([value, ...titles]);
              setLike([0, ...like]);
            }}
          >
            Publish
          </button>
        </div>
      </div>

      <div className="list">
        {titles.map((t, i) => (
          <React.Fragment key={i}>
            <h4
              onClick={() => {
                setOpen(true);
                setSelect(i);
              }}
            >
              {t}{" "}
              <span
                style={{
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(i);
                }}
              >
                ♥
              </span>{" "}
              {like[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                const c = [...titles];
                c.splice(i, 1);
                setTitles(c);
                const d = [...like];
                like.splice(i, 1);
                setLike(d);
              }}
            >
              삭제
            </button>
          </React.Fragment>
        ))}
      </div>

      <Profile />

      {open ? (
        <Modal titles={titles} select={select} open={setOpen} color="skyblue" />
      ) : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.titles[props.select]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => props.open(false)}>Close</button>
    </div>
  );
};

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: "kim" };
  }

  changeName = () => {
    this.setState({ name: "park" });
  };

  render() {
    return (
      <div>
        <h3>테스트입니다</h3>
        <p>저는 {this.state.name} 입니다</p>
        <button onClick={this.changeName}>버튼</button>
      </div>
    );
  }
}

export default App;
