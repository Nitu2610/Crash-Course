import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  let [product, setProduct] = useState([]);
  let API = "https://fakestoreapi.com/products";

  useEffect(() => {

    const fetchDAta = async () => {
      try {
      {/*
        One way to use the Axios and another way is below.
          let resp = await axios({
          method: "get",
          url: API,
        });
        */ }

      let resp= await axios.get(API);
        console.log(resp.data);
        setProduct(resp.data)
      } catch (error) {
        console.log("something went wrong", error);
      }
    };
    fetchDAta();
  }, []);

  return (
    <>
      <h1>Products Display</h1>
      <div className="parent_box">
        {product.map((item,index)=>{
          let {title,image,description, price, rating:{rate}}=item;
          return (
            <>
            <div className="childBox">
            <img src={image} alt={title} width={"250px"} height={"300px"} style={{borderRadius:"15px"}} />
            <h3 className="titleCSS">{title}</h3>
            <p className="descriptionCSS">{description}</p>
            <h4>Price: ${price}</h4>
            <h4>Rating: {rate}</h4>
            </div>
            </>
          )
        })}
      </div>
    </>
  );
}

export default App;
