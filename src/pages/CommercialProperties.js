import { useState, useEffect } from "react";
import PropertyCard from "../components/cards/PropertyCard";
import { getPropertiesByType } from "../functions/admin";
const CommercialProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getPropertiesByType("commercial")
      .then((res) => setProperties(res.data.properties))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h2 className="section-title mt-3">Commercial Properties</h2>
      {properties.map((p) => (
        <PropertyCard key={p._id} property={p} />
      ))}
    </>
  );
};

export default CommercialProperties;
