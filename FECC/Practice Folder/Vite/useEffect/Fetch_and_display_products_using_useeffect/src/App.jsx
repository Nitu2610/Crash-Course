import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);

  useEffect(function () {
    async function fetchAndGetData() {
      try {
        let res = await axios({
          method: "get",
          url: "https://fakestoreapi.com/products",
        });
        console.log(res.data);
        setProduct(res.data);
      } catch (error) {
        console.log("error 404", error);
      }
    }

    fetchAndGetData();
  }, []);
  return (
    <>
      <h1>Products Displayed</h1>
      <div>
        {product.map((item, index) => {
          let { image, price, rating:{rate}, title, category, description } = item;
          return (
          <div key={index}>
            <img src={image} alt={title} width={"200px"} height={"200px"} />
            <h2>Title: {title}</h2>
            <h3>Category: {category}</h3>
            <p>Description: {description}</p>
            <h4>Price:$ {price}</h4>
            <h4>Rating: {rate}</h4>
          </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
