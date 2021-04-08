import PropertyCard from "../components/cards/PropertyCard";
import { useState, useEffect } from "react";
import { getPropertiesByType } from "../functions/admin";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpeg";
const Home = ({ history }) => {
  const [topProperties, setTopProperties] = useState([]);
  const [resProperties, setResProperties] = useState([]);
  const [comProperties, setComProperties] = useState([]);

  useEffect(() => {
    getPropertiesByType("top", 3)
      .then((res) => {
        if (res.data.success) setTopProperties(res.data.properties);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    getPropertiesByType("residential", 3)
      .then((res) => {
        if (res.data.success) setResProperties(res.data.properties);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    getPropertiesByType("commercial", 3)
      .then((res) => {
        if (res.data.success) setComProperties(res.data.properties);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="conatiner-fluid mb-5">
      <div className="cover">
        <div className="cover-content">
          <h1 className="cover-title">
            Find properties at affordable price in Dehradun
          </h1>
          <button
            className="btn btn-large my-btn-primary title-cta"
            onClick={() => history.push("/find-property")}
          >
            View Properties{" "}
            <span className="material-icons">arrow_right_alt</span>
          </button>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title pr-5">
          Top properties in Dehradun{" "}
          <Link to="/top-properties" style={{ color: "rgb(2, 74, 54)" }}>
            {" "}
            <span className="float-right pointer">
              <small>View All</small>
            </span>
          </Link>
        </h2>
        {topProperties.map((p) => (
          <PropertyCard key={p._id} property={p} />
        ))}
      </div>

      <div className="section">
        <h2 className="section-title pr-5">
          Residential properties in Dehradun{" "}
          <Link
            to="/residential-properties"
            style={{ color: "rgb(2, 74, 54)" }}
          >
            {" "}
            <span className="float-right pointer">
              <small>View All</small>
            </span>
          </Link>
        </h2>
        {resProperties.map((p) => (
          <PropertyCard key={p._id} property={p} />
        ))}
      </div>

      <div className="section">
        <h2 className="section-title pr-5">
          Commercial properties in Dehradun{" "}
          <Link to="/commercial-properties" style={{ color: "rgb(2, 74, 54)" }}>
            {" "}
            <span className="float-right pointer">
              <small>View All</small>
            </span>
          </Link>
        </h2>
        {comProperties.map((p) => (
          <PropertyCard key={p._id} property={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
