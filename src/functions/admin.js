import axios from "axios";

export const adminLogin = async (username, password) =>
  await axios.post(`${process.env.REACT_APP_API}/api/login`, {
    username,
    password,
  });

export const addProperty = async (
  title,
  price,
  propertyType,
  topProperty,
  address,
  area,
  avgPrice,
  description,
  token
) =>
  await axios.post(
    `${process.env.REACT_APP_API}/api/add-property`,
    {
      title,
      price,
      propertyType,
      topProperty,
      address,
      area,
      avgPrice,
      description,
    },
    {
      headers: {
        "auth-token": token,
      },
    }
  );

export const getProperties = async () =>
  await axios.get(`${process.env.REACT_APP_API}/api/get-properties`);

export const getProperty = async (id) =>
  await axios.get(`${process.env.REACT_APP_API}/api/get-property?id=${id}`);

export const removeProperty = async (id, token) =>
  await axios.delete(
    `${process.env.REACT_APP_API}/api/remove-property?id=${id}`,
    {
      headers: {
        "auth-token": token,
      },
    }
  );

export const updateProperty = async (
  title,
  price,
  propertyType,
  topProperty,
  address,
  area,
  avgPrice,
  description,
  id,
  token
) =>
  await axios.put(
    `${process.env.REACT_APP_API}/api/update-property`,
    {
      title,
      price,
      propertyType,
      topProperty,
      address,
      area,
      avgPrice,
      description,
      id,
    },
    {
      headers: {
        "auth-token": token,
      },
    }
  );
export const removeImage = async (name, pos, id, token) =>
  await axios.delete(
    `${process.env.REACT_APP_API}/api/remove-image?name=${name}&pos=${pos}&id=${id}`,
    {
      headers: {
        "auth-token": token,
      },
    }
  );

export const getPropertiesByType = async (type, lim) =>
  await axios.get(
    `${process.env.REACT_APP_API}/api/get-properties-by-type?type=${type}&lim=${lim}`
  );
