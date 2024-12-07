import React,{useState,useEffect} from "react";

const Gallery=()=>{
    const [photos,setPhotos]=useState([]);

    useEffect(()=>{
        axios.get('https://picsum.photos/v2/list?page=1&limit=10')
        .then(resp=>setPhotos(resp.data));
    },[]);

    return (
        <>
        <div>
        <h2>Gallery page</h2>
        <div>
            {photos.map(photo=>(
                <img key={photo.id} src={photo.download_url} alt={photo.author} width={'300'} />
            ))}
        </div>
        </div>
        </>
    )
}

export {Gallery}