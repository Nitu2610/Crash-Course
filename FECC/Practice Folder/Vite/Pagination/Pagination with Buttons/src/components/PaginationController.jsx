import { useState } from "react";

const PaginationController = ({ data, itemPerPage }) => {
  const totalPages = Math.ceil(data.length / itemPerPage);
  // console.log(totalPages)
  return (
    <>
      <div className="pagination-buttons">
        {/* I have used the Array.from method to create a array of button which could be utilized in pagination.*/ }
     {Array.from({length:totalPages},(_,i)=>(
        <button key={i+1}>{i+1}</button>
     ))}
      </div>
    </>
  );
};

export { PaginationController };

