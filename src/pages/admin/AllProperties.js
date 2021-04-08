import AdminNav from "../../components/nav/AdminNav.js";
import AdminPropertyCard from "../../components/cards/AdminPropertyCard";
import { useState, useEffect } from "react";
import { getProperties } from "../../functions/admin";

const AllProperties = ({ token, history }) => {
  if (!token) history.push("/");
  const [properties, setProperties] = useState([]);

  const loadProperties = () =>
    getProperties()
      .then((res) => setProperties(res.data.properties))
      .catch((err) => console.log(err));

  useEffect(() => {
    const loadProperties = () =>
      getProperties()
        .then((res) => setProperties(res.data.properties))
        .catch((err) => console.log(err));
    loadProperties();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4 className="section-title mt-3">All properties</h4>
          {properties.length > 0 &&
            properties.map((p) => (
              <AdminPropertyCard
                key={p._id}
                property={p}
                loadProperties={loadProperties}
                token={token}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
