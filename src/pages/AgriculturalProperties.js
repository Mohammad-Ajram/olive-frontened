import { useState, useEffect } from "react";
import PropertyCard from "../components/cards/PropertyCard";
import { getPropertiesByType } from "../functions/admin";
const AgriculturalProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getPropertiesByType("agricultural")
      .then((res) => setProperties(res.data.properties))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h2 className="section-title mt-3">Agricultural Properties</h2>
      {properties.map((p) => (
        <PropertyCard key={p._id} property={p} />
      ))}
    </>
  );
};

export default AgriculturalProperties;
