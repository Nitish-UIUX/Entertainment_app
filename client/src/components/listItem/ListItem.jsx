import "./listItem.scss";
import {
  PlayArrow,
  Add,
  ThumbUpAltOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/movies/find/${item}`, {
          headers: {
            token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.message); // Set error message
        setIsLoading(false);
      }
    };
    getMovie();
  }, [item]);

  return (
    <Link to="/Watch" state={{ movie }}>
      <div
        className="listItem"
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <>
            <img src={movie?.imgSm} alt="" />
            {isHovered && movie && movie.trailer && (
              <>
                <video src={movie.trailer} autoPlay loop />
                <div className="itemInfo">
                  <div className="icons">
                    <PlayArrow className="icon" />
                    <Add className="icon" />
                    <ThumbUpAltOutlined className="icon" />
                    <ThumbDownOutlined className="icon" />
                  </div>
                  <div className="itemInfoTop">
                    <span>{movie.duration}</span>
                    <span className="limit">+{movie.limit}</span>
                    <span>{movie.year}</span>
                  </div>
                  <div className="desc">{movie.desc}</div>
                  <div className="genre">{movie.genre}</div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </Link>
  );
}
