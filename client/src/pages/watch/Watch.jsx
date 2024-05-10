import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";

export default function Watch() {
  const location = useLocation();
  const movie = location.state?.movie; // Use optional chaining to handle undefined
  console.log("Location state:", location.state);
  console.log("Movie:", movie);

  // Check if movie exists before rendering video
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      {movie && movie.video && ( // Check if movie and video properties exist
        <video className="video" autoPlay controls src={movie.video} />
      )}
    </div>
  );
}
