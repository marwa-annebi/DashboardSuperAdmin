import { Link } from "react-router-dom";
import "./NotFound.css";
import image from "./../../assets/notFound.svg";
const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="container-404">
        <div>
          <img src={image} alt="orange bomb" width="500px" />
        </div>
      </div>

      <div className="not-found-text">
        <p>Sorry this page cannot be found.</p>

        <Link to="/login">Click here to go back to homepage...</Link>
      </div>
    </div>
  );
};

export default NotFound;
