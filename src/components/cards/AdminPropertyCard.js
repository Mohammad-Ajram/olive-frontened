import House from "../../images/default.png";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { removeProperty, updateProperty } from "../../functions/admin";
import { Link } from "react-router-dom";

const AdminPropertyCard = ({ property, loadProperties, token }) => {
  const handleRemove = () => {
    if (window.confirm("Are you sure yo want to remove the property?")) {
      removeProperty(property._id, token)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            toast.error("Property removed!");
            loadProperties();
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="property-card mb-5">
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
          <div className="px-3">
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
            <div className="row">
              <div className="col-md-6">
                <div className="p-3">
                  {" "}
                  <button className="btn btn-block my-btn-primary">
                    <Link
                      to={`/admin/update-property/${property._id}`}
                      className="p-card-link"
                      style={{ width: "100%" }}
                    >
                      Edit <EditOutlined />
                    </Link>
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3">
                  {" "}
                  <button
                    className="btn my-btn-primary btn-block text-center remove-btn"
                    onClick={handleRemove}
                  >
                    <span className="my-auto">
                      {" "}
                      Remove
                      <DeleteOutlined />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPropertyCard;
