import { useEffect, useState } from "react";

const AlbumGallery = () => {
  let API = "https://jsonplaceholder.typicode.com/albums";
  let [albumData, setAlbumData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [titleName, setTitleName] = useState("");
  let [titleIcon, setTitleIcon] = useState("");

  const handleTitleName = (e) => {
    setTitleName(e.target.value);
  };
  const handleTitleIcon = (e) => {
    setTitleIcon(e.target.value); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      title: titleName,
      id: Number(titleIcon),
    };
    try {
      await fetch("https://jsonplaceholder.typicode.com/albums", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((response) => response.json())
        .then((data) => setAlbumData((prevAlbum) => [data, ...prevAlbum]));
    } catch (error) {
      console.log("something went wrong", error);
    }
    setTitleIcon("");
    setTitleName("");
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      try {
        fetch(API)
          .then((res) => res.json())
          .then((data) => setAlbumData(data));
        setLoading(false);
      } catch (error) {
        console.log("something went wrong", error);
      }
    }, 1000);
  }, []);
  return (
    <>
      <h1>Album Gallery</h1>
      <div className="formBox">
        <form action="" type="submit">
          <label>Album Title</label>
          <input type="text" value={titleName} onChange={handleTitleName} />
          <label>Album Icon</label>
          <input type="number" value={titleIcon} onChange={handleTitleIcon} />
          <input type="submit" value="Add Album" onClick={handleSubmit} />
        </form>
      </div>
      <h1>Album List: </h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="displayFetchedData">
          {albumData.map((item, index) => {
            let { title, id } = item;
            return (
              <div className="albumCardBox" key={index}>
                <div className="iconDisplayBox">{id}</div>
                <h3>{title}</h3>
              </div>
            );
          })}
          ;
        </div>
      )}
    </>
  );
};

export { AlbumGallery };
