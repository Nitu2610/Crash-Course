import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import "./User.css";

document.title = `User Details`;
const Users = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  let API = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchUserData = () => {
      setLoading(true);
      setTimeout(async () => {
        try {
          let resp = await axios.get(API);
          console.log(resp.data);
          setLoading(false);
          setUser(resp.data);
        } catch (error) {
          console.log("Something went wrong", error);
          setLoading(false);
        }
      }, 3000);
    };
    fetchUserData();
  }, []);
  return (
    <>
      <div className="userCardOuterBox">
        {loading ? (
          <h1 style={{fontSize:"44px", color:"black"}}> Loading...</h1>
        ) : (
          user.map((item, index) => {
            let {
              name,
              email,
              address: {
                suite,
                street,
                city,
                zipcode,
                geo: { lat, lng },
              },
            } = item;
            return (
              <>
                <div className="userCardInnerBox" key={index}>
                  <p id="userName">{name}</p>
                  <p id="userEmail">{email}</p>
                  <p id="userAddress">
                    <strong>Address: </strong>
                    <br />
                    {suite}, {street}, {city}, {zipcode}.
                    <br /> Latitude: {lat}, Longitude: {lng}
                  </p>
                </div>
              </>
            );
          })
        )}
        ;
      </div>
    </>
  );
};

export { Users };
