import House from "../../images/default.png";
import { useHistory } from "react-router-dom";
import { Modal } from "antd";
import { useState } from "react";
import Whatsapp from "../../images/icons/WhatsApp.svg";
const PropertyCard = ({ property }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const history = useHistory();
  const goToProductDetails = () => {
    history.push(`/property-details/${property._id}`);
  };
  const showModal = (e) => {
    e.stopPropagation();
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
      <div className="property-card mb-5 pointer" onClick={goToProductDetails}>
        <div className="row">
          <div className="col-md-6 property-card-column">
            <img
              src={
                property.images.length > 0
                  ? process.env.REACT_APP_API + property.images[0]
                  : House
              }
              className="property-card-image pointer"
              alt="house"
            />
          </div>
          <div className="col-md-6 property-card-column">
            <div className="ml-3 ml-md-0 mr-3 mr-md-0">
              <span className="price">₹{property.price} L</span>
              <br />
              <span className="property-card-title">{property.title}</span>
              <br />
              <span className="p-card-text">{property.address}</span>
              <div className="property-card-section">
                <span className="p-card-sec-column">
                  <span className="property-card-item">Plot Area</span> <br />
                  <span className="property-card-content">
                    {property.area} sq.ft
                  </span>
                </span>
                <div className="vertical-line"></div>
                <span className="p-card-sec-column">
                  <span className="property-card-item">Avg. Price</span> <br />{" "}
                  <span className="property-card-content">
                    ₹{property.avgPrice}k/sq.ft
                  </span>
                </span>
              </div>
              <div className="p-card-text">{property.description}</div>
              <div className="p-card-btn-container">
                {" "}
                <button
                  className="p-card-cta btn my-btn-primary"
                  onClick={showModal}
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
