import { FC } from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

const Products: FC = () => {
  interface fetchProductValue {
    errorFetch: string | null;
    products: object[];
  }

  const [errorFetch, setErrorFetch] =
    useState<fetchProductValue["errorFetch"]>(null);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const urlServer = "http://localhost:5000/getProducts";
    const response = await fetch(urlServer);
    const data = await response.json();
    console.log("getProducts data:", data);
    if (!response.ok) {
      setErrorFetch(data && data.message ? data.message : "Cannot get data!");
    } else {
      if (data && data.products.length < 1) {
        setErrorFetch("There is no product! Please add more!");
      } else {
        setErrorFetch(null);
        setProducts(data.products);
      }
    }
  };

  useEffect(() => {
    try {
      getProducts();
    } catch (err) {
      console.log("err try catch fetchProducts:", err);
      setErrorFetch("Something went wrong!");
    }
  }, []);

  useEffect(() => {
    console.log("errorFetch:", errorFetch);
  }, [errorFetch]);
  useEffect(() => {
    console.log("products:", products);
  }, [products]);

  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <div>Products</div>
    </div>
  );
};

export default Products;
