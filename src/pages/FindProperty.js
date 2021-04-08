import PropertyCard from "../components/cards/PropertyCard";
import { getProperties } from "../functions/admin";
import { useState, useEffect } from "react";
const FindProperty = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties()
      .then((res) => setProperties(res.data.properties))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h2 className="section-title mt-3">Properties List</h2>
      {properties.map((p) => (
        <PropertyCard key={p._id} property={p} />
      ))}
    </>
  );
};

export default FindProperty;
