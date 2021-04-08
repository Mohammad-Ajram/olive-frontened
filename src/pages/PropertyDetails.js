import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProperty, getPropertiesByType } from "../functions/admin";
import PropertyCard from "../components/cards/PropertyCard";
import { Modal } from "antd";
import Whatsapp from "../images/icons/WhatsApp.svg";
import House from "../images/default.png";

const PropertyDetails = () => {
  const [property, setProperty] = useState([]);
  const [properties, setProperties] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { id } = useParams();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    console.log("id", id);
    getProperty(id)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data);
          setProperty(res.data.property);
          getPropertiesByType(res.data.property.propertyType, 3)
            .then((res) => setProperties(res.data.properties))
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <Modal
        title="Interested in buying this property"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <div className="modal-container">
          <p className="modal-text">
            You can contact us at any one of the following contact numbers given
            below
          </p>
          <div className="container">
            <img
              src={Whatsapp}
              alt="whatsapp icon"
              height="24px"
              width="24px"
            />
            <span className="modal-tag u">+91-7060777910 (Parinay Thakur)</span>
            <br />
            <br />
            <img
              src={Whatsapp}
              alt="whatsapp icon"
              height="24px"
              width="24px"
            />
            <span className="modal-tag u">
              +91-7078888747 (Col Paras Basnett)
            </span>
            <br />
            <br />
            <img
              src={Whatsapp}
              alt="whatsapp icon"
              height="24px"
              width="24px"
            />
            <span className="modal-tag u">
              +91-9412967563 (Capt Satyendra Berry)
            </span>
          </div>
        </div>
      </Modal>
      <div className="container-fluid mb-4">
        <div className="row">
          <div className="col-md-7">
            <Carousel showArrows={true} autoPlay infiniteLoop>
              {property.images && property.images[0] ? (
                property.images.map((i) => (
                  <img
                    src={`${process.env.REACT_APP_API}${i}`}
                    key={i}
                    alt="property image"
                  />
                ))
              ) : (
                <img src={House} alt="property image" />
              )}
            </Carousel>
          </div>

          <div className="col-md-5">
            <h4 className="p-d-main-title mt-2">Property Details</h4>
            <span className="p-d-price">₹{property.price} L</span>
            <br />
            <span className="p-d-title">{property.title}</span>
            <br />
            <span className="p-d-address">{property.address}</span>
            <br />
            <br />
            <span className="p-d-item">Plot Area</span>
            <br />
            <span className="p-d-content">{property.area} sq.ft</span>
            <br />
            <br />
            <span className="p-d-item">Avg. Price</span>
            <br />
            <span className="p-d-content">₹{property.avgPrice}k/sq.ft</span>
            <br />
            <br />
            <span className="p-d-item">Description</span>
            <br />
            <span className="p-d-content">{property.description}</span>
            <br />
            <br />
            <button className="btn my-btn-primary mt-4" onClick={showModal}>
              Contact
            </button>
          </div>
        </div>
      </div>
      <hr />
      <h2 className="section-title mt-4">Similar Properties</h2>
      {properties.map((p) => (
        <PropertyCard key={p._id} property={p} />
      ))}
    </>
  );
};

export default PropertyDetails;
