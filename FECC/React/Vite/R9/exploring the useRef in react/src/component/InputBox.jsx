import { useState, useRef, useEffect } from "react";

const InputBox = () => {
  const inputBox = useRef(null);
  const userDataRef = useRef("");
  const displayRef = useRef(null);

  useEffect(() => {
    inputBox.current.focus();
  }, []);
  const handleChange = (e) => {
    userDataRef.current = e.target.value;
    if (displayRef.current) {
      displayRef.current.textContent = userDataRef.current;
    }
    console.log(userDataRef.current);
  };
  return (
    <>
      <h1>User Input</h1>
      <div onClick={() => {}}>
        <input type="text" ref={inputBox} onChange={handleChange} />
      </div>
      <p ref={displayRef}>{userDataRef.current}</p>
    </>
  );
};
export { InputBox };
