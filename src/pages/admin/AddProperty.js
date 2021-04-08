import AdminNav from "../../components/nav/AdminNav.js";
import { useState } from "react";
import { addProperty } from "../../functions/admin";
import axios from "axios";
import PropertyForm from "../../components/forms/PropertyForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";

const AddProperty = ({ token, history }) => {
  if (!token) history.push("/");
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    price: "",
    propertyType: "",
    topProperty: false,
    address: "",
    area: "",
    avgPrice: "",
    description: "",
    files: [],
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    addProperty(
      propertyDetails.title,
      propertyDetails.price,
      propertyDetails.propertyType,
      propertyDetails.topProperty,
      propertyDetails.address,
      propertyDetails.area,
      propertyDetails.avgPrice,
      propertyDetails.description,
      token
    )
      .then((res) => {
        console.log(res.data);
        if (res.data.success) uploadFiles(res.data.property._id);
      })
      .catch((err) => console.log(err));
  };

  const uploadFiles = (id) => {
    let fd = new FormData();
    for (let i = 0; i < propertyDetails.files.length; i++) {
      Resizer.imageFileResizer(
        propertyDetails.files[i],
        720,
        720,
        "JPEG",
        100,
        0,
        (uri) => {
          // console.log(uri);
          fd.append("file", uri);
        },
        "file"
      );
    }
    setTimeout(() => {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_API}/api/upload?id=${id}`,
        data: fd,
        headers: {
          "Content-Type": "multipart/form-data",
          "auth-token": token,
        },
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            toast.success("Property added successfully!");
            history.push("/admin/all-properties");
          } else console.log("Error uploading images, please try again!");
        })
        .catch((err) => console.log(err));
    }, 2000);
  };

  const showAvatars = () => {
    let arr = [];
    for (let i = 0; i < propertyDetails.files.length; i++) {
      arr.push(
        <img
          src={URL.createObjectURL(propertyDetails.files[i])}
          alt="property"
          className="avatar"
          key={i}
        />
      );
    }
    return arr;
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4 className="form-title mt-2">Add Property</h4>
          <PropertyForm
            handleSubmit={handleSubmit}
            propertyDetails={propertyDetails}
            showAvatars={showAvatars}
            setPropertyDetails={setPropertyDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
