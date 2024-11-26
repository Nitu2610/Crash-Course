import { useState, useEffect } from "react";
import axios from "axios";
import "./User.css";
import { PaginationController } from "./PaginationController";

const UserDetails = () => {
  const API = "https://jsonplaceholder.typicode.com/comments";
  let [totalData, setTotalData] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 50;

  useEffect(() => {
    const FetchUserDetails = async () => {
      try {
        let resp = await axios.get(API);
        {
          /*The below code will throw an error when the server does not send the data from it end.And if there is any error then the code wont execute further. */
        }
        if (resp.status !== 200) {
          throw new Error("API Error: ");
        }
        let fetchedData = resp.data;
        setTotalData(fetchedData);
      } catch (error) {
        console.warn("Something went wrong", error);
      }
    };
    FetchUserDetails();
  }, []);

  let startIndex = (currentPage - 1) * itemPerPage;
  let lastIndex = startIndex + itemPerPage;
  let dataPerPage = totalData.slice(startIndex, lastIndex);

  return (
    <>
      <h1>User details!!!!</h1>
      <div className="paginationControlBox">
        <PaginationController
          data={totalData}
          itemPerPage={itemPerPage}
          updatePage={setCurrentPage}
        />
      </div>
      <div className="userDataDisplayBox">
        {dataPerPage.map((item, index) => {
          let { id, name, email, body } = item;
          return (
            <div className="UserCardBox" key={index}>
              <h2>{id}</h2>
              <p className="nameOverflowControl">{name}</p>
              <p>{email}</p>
              <p className="commentOverflowControl">
                <strong>Comment: </strong>
                {body}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { UserDetails };
