import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => {
  const [UserSearchText, setUserSearchText] = useState("");
  return (
    <>
      <div
        id="search_outerBox"
        style={{
          /* border: "1px solid red", */
          fontFamily: "Montserrat",
          height: "75%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
          backgroundColor: "#EAEAEA",
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        }}
      >
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="2xl"
          style={{ marginLeft: "15px" }}
        />
        <input
          style={{
            width: "350px",
            marginLeft: "15px",
            height: "30px",
            border: "none",
            backgroundColor: "#EAEAEA",
            fontSize: "14px",
            fontWeight: "400",
            color: "RGBA(0, 0, 0, 0.5)",
            outline:'none'
          }}
          type="text"
          placeholder="Search by products"
          value={UserSearchText}
          onChange={(e) => setUserSearchText(e.target.value)}
        />
      </div>
    </>
  );
};

export { SearchBox };
