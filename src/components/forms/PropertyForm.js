import { Avatar, Badge } from "antd";
import { removeImage } from "../../functions/admin";

const PropertyForm = ({
  handleSubmit,
  showAvatars,
  propertyDetails,
  setPropertyDetails,
  updateForm,
  uploadFiles,
  id,
  token,
  loadProperty,
}) => {
  const handleImageDelete = (name, pos) => {
    removeImage(name, pos, id, token)
      .then((res) => {
        if (res.data.success) loadProperty();
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Title</label>
        <input
          type="text"
          value={propertyDetails.title}
          className="form-control"
          onChange={(e) =>
            setPropertyDetails({ ...propertyDetails, title: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label className="form-label">Price (in lakhs)</label>
        <input
          type="number"
          value={propertyDetails.price}
          className="form-control"
          onChange={(e) =>
            setPropertyDetails({ ...propertyDetails, price: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label className="form-label">Property Type</label>
        <select
          value={propertyDetails.propertyType}
          className="form-control"
          onChange={(e) =>
            setPropertyDetails({
              ...propertyDetails,
              propertyType: e.target.value,
            })
          }
        >
          <option value="agricultural">Agricultural</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="industrial">Industrial</option>
          <option value="mixedUse">Mixed-Use</option>
          <option value="specialPurpose">Special Purpose</option>
        </select>
      </div>
      <div className="form-group">
        {" "}
        <label className="form-label">Include in top properties</label>
        <label>
          <label className="switch">
            <input
              type="checkbox"
              checked={propertyDetails.topProperty}
              onChange={() =>
                setPropertyDetails({
                  ...propertyDetails,
                  topProperty: !propertyDetails.topProperty,
                })
              }
            />
            <span className="slider round"></span>
          </label>
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">Address</label>
        <input
          type="text"
          value={propertyDetails.address}
          className="form-control"
          onChange={(e) =>
            setPropertyDetails({ ...propertyDetails, address: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label className="form-label">Area (in sq.ft)</label>
        <input
          type="number"
          value={propertyDetails.area}
          className="form-control"
          onChange={(e) =>
            setPropertyDetails({ ...propertyDetails, area: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label className="form-label">Average Price (in k / sq.ft)</label>
        <input
          type="number"
          value={propertyDetails.avgPrice}
          className="form-control"
          onChange={(e) =>
            setPropertyDetails({ ...propertyDetails, avgPrice: e.target.value })
          }
        />
      </div>
      <div className="form-group">
        <label className="form-label">Description</label>
        <input
          type="text"
          value={propertyDetails.description}
          className="form-control"
          onChange={(e) =>
            setPropertyDetails({
              ...propertyDetails,
              description: e.target.value,
            })
          }
        />
      </div>
      <div className="form-group">
        <label className="form-label">Upload Images</label>
        <br />
        <label className="btn btn-outline-primary">
          Choose File
          <input
            type="file"
            accept="image/*"
            encType="multipart/form-data"
            hidden
            multiple
            onChange={(e) => {
              setPropertyDetails({
                ...propertyDetails,
                files: e.target.files,
              });
              if (updateForm) uploadFiles(e, id);
            }}
          />
        </label>
        &nbsp;
        {propertyDetails.files.length > 0 &&
          updateForm !== true &&
          showAvatars()}
        {updateForm === true &&
          propertyDetails.images.map((item, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                display: "inline-block",
                marginLeft: "10px",
              }}
            >
              <span
                className="pointer"
                onClick={() => handleImageDelete(item.slice(1), i)}
                style={{ position: "absolute", top: "0px", right: "-10px" }}
              >
                <span
                  className="material-icons"
                  style={{ color: "rgb(2, 74, 54)" }}
                >
                  highlight_off
                </span>
              </span>

              <Avatar
                size={100}
                src={`${process.env.REACT_APP_API}${item}`}
              ></Avatar>
            </div>
          ))}
      </div>
      <br />
      <div className="form-group">
        <button className="btn my-btn-primary">
          {updateForm ? "Update Property" : "Add Property"}
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;
