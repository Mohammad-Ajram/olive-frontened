import { useState, useEffect } from "react";
import PropertyCard from "../components/cards/PropertyCard";
import { getPropertiesByType } from "../functions/admin";
const ResidentialProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getPropertiesByType("residential")
      .then((res) => setProperties(res.data.properties))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h2 className="section-title mt-3">Residential Properties</h2>
      {properties.map((p) => (
        <PropertyCard key={p._id} property={p} />
      ))}
    </>
  );
};

export default ResidentialProperties;
