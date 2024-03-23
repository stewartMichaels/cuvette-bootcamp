import { useState } from "react";
import { useNavigate } from "react-router-dom";

// component import
import MovieBox from "../components/MovieBox";
import MovieChip from "../components/MovieChip";

// image import
import action from "../assets/action.svg";
import drama from "../assets/drama.svg";
import romance from "../assets/romance.svg";
import thriller from "../assets/thriller.svg";
import western from "../assets/western.svg";
import horror from "../assets/horror.svg";
import fantasy from "../assets/fantasy.svg";
import music from "../assets/music.svg";
import fiction from "../assets/fiction.svg";
import warning from "../assets/warning-icon.svg";

// css import
import "./Movies.css";

const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: (
      <img
        src={action}
        alt="Action Genre"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: (
      <img
        src={drama}
        alt="Drama Genre"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: "Romance",
    color: "#148A08",
    image: (
      <img
        src={romance}
        alt="Romance Genre"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: (
      <img
        src={thriller}
        alt="Thriller Genre"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: "Western",
    color: "#902500",
    image: (
      <img
        src={western}
        alt="Western Genre"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: (
      <img
        src={horror}
        alt="Horror Genre"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: "Fantasy",
    color: "#FF4ADE",
    image: (
      <img
        src={fantasy}
        alt="Fantasy Genre"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: "Music",
    color: "#E61E32",
    image: (
      <img
        src={music}
        alt="Music Genre"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: (
      <img
        src={fiction}
        alt="Fiction Genre"
        style={{ width: "200px", height: "120px" }}
      />
    ),
  },
];

export default function Movies() {
  const [selected, setSelected] = useState([]);
  console.log(selected);

  const navigate = useNavigate();

  const handleClick = () => {
    if (selected.length < 3) {
      return;
    } else {
      navigate("/display");
    }
  };

  return (
    <>
      <div className="movie-container">
        <div className="m-container-left">
          <h1 className="title">Super app</h1>
          <p className="choose">Choose your entertainment category</p>

          <div
            className="movie-chip"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "30px",
            }}
          >
            {selected.map((item) => {
              return (
                <MovieChip
                  key={item.id}
                  data={item}
                  selected={selected}
                  setSelected={setSelected}
                />
              );
            })}
          </div>
          {selected.length < 3 ? (
            <p className="warning">
              <img src={warning} alt="Warning Icon" />
              Minimum 3 category required
            </p>
          ) : (
            <></>
          )}
        </div>
        <div className="m-container-right">
          <div
            className="genre-cards"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              width: "250px",
              height: "250px",
              gap: "30px",
            }}
          >
            {genres.map((genres) => {
              return (
                <MovieBox
                  key={genres.id}
                  data={genres}
                  selected={selected}
                  setSelected={setSelected}
                />
              );
            })}
          </div>
          <button className="next-btn" onClick={handleClick}>
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}
