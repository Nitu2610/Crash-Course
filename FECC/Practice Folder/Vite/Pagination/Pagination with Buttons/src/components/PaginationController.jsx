import { useState } from "react";

const PaginationController = ({ data, itemPerPage, updatePage }) => {
  const totalPages = Math.ceil(data.length / itemPerPage);
  // console.log(totalPages)
  return (
    <>
      <div
        className="pagination-buttons"
        style={{
          width: "25%",
          margin: "auto",
          display: "flex",
          gap: "10px",
          paddingBottom: "20px",
        }}
      >
        {/* I have used the Array.from method to create a array of button which could be utilized in pagination.*/}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => updatePage(i + 1)}
            style={{
              padding: "10px",
              margin: "auto",
              width: "40px",
              fontSize: "16px",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export { PaginationController };
