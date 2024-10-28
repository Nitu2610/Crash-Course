import React from "react";

function GreetingCard({ greeting, name }) {
  return (
    <>
      <div>
        <h1>{greeting}</h1>
        <p>{name}</p>
      </div>
    </>
  );
}

export { GreetingCard };
