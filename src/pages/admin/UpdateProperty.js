import AdminNav from "../../components/nav/AdminNav.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProperty, updateProperty } from "../../functions/admin";
import axios from "axios";
import PropertyForm from "../../components/forms/PropertyForm";
import Resizer from "react-image-file-resizer";
import { toast } from "react-toastify";

const UpdateProperty = ({ token, history }) => {
  const [property, setProperty] = useState({});
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    price: "",
    propertyType: "",
    topProperty: false,
    address: "",
    area: "",
    avgPrice: "",
    description: "",
    images: [],
    files: [],
  });

  const { id } = useParams();
  const loadProperty = () =>
    getProperty(id)
      .then((res) => {
        if (res.data.success) {
          setProperty(res.data.property);
          const {
            title,
            price,
            propertyType,
            topProperty,
            address,
            area,
            avgPrice,
            description,
            images,
          } = res.data.property;
          setPropertyDetails({
            ...propertyDetails,
            title,
            price,
            propertyType,
            topProperty,
            address,
            area,
            avgPrice,
            description,
            images,
          });
        }
      })
      .catch((err) => console.log(err));

  useEffect(() => {
    const loadProperty = () =>
      getProperty(id)
        .then((res) => {
          if (res.data.success) {
            setProperty(res.data.property);
            const {
              title,
              price,
              propertyType,
              topProperty,
              address,
              area,
              avgPrice,
              description,
              images,
            } = res.data.property;
            setPropertyDetails({
              ...propertyDetails,
              title,
              price,
              propertyType,
              topProperty,
              address,
              area,
              avgPrice,
              description,
              images,
            });
          }
        })
        .catch((err) => console.log(err));
    loadProperty();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    updateProperty(
      propertyDetails.title,
      propertyDetails.price,
      propertyDetails.propertyType,
      propertyDetails.topProperty,
      propertyDetails.address,
      propertyDetails.area,
      propertyDetails.avgPrice,
      propertyDetails.description,
      id,
      token
    )
      .then((res) => {
        if (res.data.success) {
          toast.success("Property successfully updated!");
          history.push("/all-properties");
        }
      })
      .catch((err) => console.log(err));
  };

  const uploadFiles = (e, id) => {
    let fd = new FormData();
    for (let i = 0; i < e.target.files.length; i++) {
      Resizer.imageFileResizer(
        e.target.files[i],
        720,
        720,
        "JPEG",
        100,
        0,
        (uri) => {
          console.log("uri", uri);
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
            loadProperty();
          }
        })
        .catch((err) => console.log(err));
    }, 2000);
  };

  // const showAvatars = () => {
  //   let arr = [];
  //   for (let i = 0; i < propertyDetails.files.length; i++) {
  //     arr.push(
  //       <img
  //         src={URL.createObjectURL(propertyDetails.files[i])}
  //         alt="property"
  //         className="avatar"
  //         key={i}
  //       />
  //     );
  //   }
  //   return arr;
  // };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminNav />
        </div>
        <div className="col-md-10">
          <h4 className="section-title mt-4">Update Property</h4>
          <PropertyForm
            handleSubmit={handleSubmit}
            propertyDetails={propertyDetails}
            setPropertyDetails={setPropertyDetails}
            uploadFiles={uploadFiles}
            id={id}
            updateForm={true}
            token={token}
            loadProperty={loadProperty}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateProperty;
